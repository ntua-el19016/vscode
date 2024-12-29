const { jsPDF } = window.jspdf;  // Destructure jsPDF from the global window.jspdf object

// Function to calculate the overall score based on the survey data
const calculateScore = function(surveyData, surveyJson) {
    let totalScore = 0;
    const questionDetails = [];  // To store question details for the PDF report

    // Iterate through the survey data responses
    Object.keys(surveyData).forEach(question => {
        const response = surveyData[question];
        const questionElement = surveyJson.pages.flatMap(page => page.elements).find(element => element.name === question);

        if (!questionElement) {
            console.warn(`Question ${question} not found in survey JSON`);
            return;
        }

        // Check if the question type is "radiogroup" or "checkbox", as these are weighted
        if (["radiogroup", "checkbox"].includes(questionElement.type)) {
            let questionScore = 0;
            let questionAnswer = '';
            
            // If the response is an array (multi-response question like checkboxes)
            if (Array.isArray(response)) {
                questionAnswer = response.join(', ');
                response.forEach(answer => {
                    const weight = answer.split('-')[1];  // Get the part after the dash (the weight)
                    questionScore += parseInt(weight, 10);   // Add the weight to the total score
                });
            } else {
                // Single response (radio button)
                questionAnswer = response;
                const weight = response.split('-')[1];  // Get the part after the dash (the weight)
                questionScore += parseInt(weight, 10);  // Add the weight to the total score
            }

            // Store the question details for the PDF
            questionDetails.push({
                question: questionElement.title || question, // Use title if available, else use name
                type: questionElement.type,
                answer: questionAnswer,
                score: questionScore
            });

            totalScore += questionScore; // Add the question score to the total score
        }
    });

    return { totalScore, questionDetails };
};

// Function to generate and download the PDF with the score
const savePdf = function(surveyData, surveyJson) {
    if (!surveyData) {
        console.error("No survey data available to generate PDF");
        return;
    }

    // Calculate the score and gather question details
    const { totalScore, questionDetails } = calculateScore(surveyData, surveyJson);

    // Initialize jsPDF
    const doc = new jsPDF();

    // Add a title to the PDF
    doc.setFontSize(16);
    doc.text("Survey Results and Impact Assessment", 10, 10);

    // Set initial position for question details
    let yPosition = 30;

    // Function to handle adding content to the PDF with automatic line breaks
    const addTextWithLineBreaks = (text, yPosition) => {
        const margin = 10; // Margin for the text
        const maxWidth = 180; // Maximum width for the text (in points)
        const lines = doc.splitTextToSize(text, maxWidth);
        doc.text(lines, margin, yPosition);
        return yPosition + lines.length * 10;  // Move yPosition down by the number of lines
    };

    // Add survey data to the PDF (as a JSON string)
    doc.setFontSize(12);
    const surveyText = JSON.stringify(surveyData, null, 3);  // Format the survey data as a string
    yPosition = addTextWithLineBreaks(surveyText, yPosition);

    // Add the detailed breakdown of the questions and their scores
    questionDetails.forEach((detail) => {
        yPosition = addTextWithLineBreaks(`Question: ${detail.question}`, yPosition);
        yPosition = addTextWithLineBreaks(`Type: ${detail.type}`, yPosition);
        yPosition = addTextWithLineBreaks(`Answer: ${detail.answer}`, yPosition);
        yPosition = addTextWithLineBreaks(`Score: ${detail.score}`, yPosition);

        // Check if the current content exceeds the page, and if so, add a new page
        if (yPosition > 250) {
            doc.addPage();
            yPosition = 20; // Reset yPosition for the new page
        }
    });

    // Add the calculated total score to the PDF
    yPosition = addTextWithLineBreaks(`Total Impact Score: ${totalScore}`, yPosition);

    // Save the PDF with a filename
    doc.save("results.pdf");
};

// Survey Component using SurveyJS
function SurveyComponent() {
    const [surveyData, setSurveyData] = React.useState(null);  // State to hold the survey data

    const survey = new Survey.Model(json_simple);  // Assuming `json_simple` is your survey JSON

    // Listen for when the survey is complete
    survey.onComplete.add((sender, options) => {
        console.log("Survey Completed. Survey Data: ", sender.data);
        setSurveyData(sender.data);  // Store the data in the state variable
    });

    // Add a custom navigation item to trigger PDF generation
    survey.addNavigationItem({
        id: "pdf-export",
        title: "Save as PDF",
        action: () => {
            if (surveyData) {
                console.log("Saving survey data as PDF...");
                savePdf(surveyData, json_simple);  // Pass the survey data and JSON structure to the savePdf function
            } else {
                console.error("Survey data is not available yet.");
            }
        }
    });

    return <SurveyReact.Survey model={survey} />;
}

// Render the Survey Component to the DOM
const root = ReactDOM.createRoot(document.getElementById("surveyElement"));
root.render(<SurveyComponent />);
