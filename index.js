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

        // Handle different question types using a switch-case
        switch (questionElement.type) {
            case "radiogroup":
            case "checkbox":
                let questionScore = 0;
                let questionAnswer = '';

                if (Array.isArray(response)) {
                    questionAnswer = response.join(', ');
                    response.forEach(answer => {
                        const choice = questionElement.choices.find(choice => choice.value === answer);
                        if (choice) {
                            questionScore += choice.weight;
                        }
                    });
                } else {
                    questionAnswer = response;
                    const choice = questionElement.choices.find(choice => choice.value === response);
                    if (choice) {
                        questionScore += choice.weight;
                    }
                }

                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: questionAnswer,
                    score: questionScore
                });

                totalScore += questionScore;
                break;

            case "rating":
                const ratingAnswer = response;
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: ratingAnswer,
                    score: ratingAnswer
                });
                totalScore += ratingAnswer;
                break;

            case "dropdown":
                const dropdownAnswer = response;
                const dropdownChoice = questionElement.choices.find(choice => choice.value === dropdownAnswer);
                if (dropdownChoice) {
                    totalScore += dropdownChoice.weight;
                    questionDetails.push({
                        name: question,
                        title: questionElement.title,
                        type: questionElement.type,
                        answer: dropdownAnswer,
                        score: dropdownChoice.weight
                    });
                }
                break;

            case "tagbox":
                let tagboxScore = 0;
                let tagboxAnswer = '';
                // Handle multiple selections for dropdown
                if (Array.isArray(response)) {
                    tagboxAnswer = response.join(', ');
                    response.forEach(answer => {
                        const tagboxChoice = questionElement.choices.find(choice => choice.value === answer);
                        if (tagboxChoice) {
                            tagboxScore += tagboxChoice.weight;
                        }
                    });
                } else {
                    // For single selection
                    const tagboxChoice = questionElement.choices.find(choice => choice.value === response);
                    if (tagboxChoice) {
                        tagboxScore = tagboxChoice.weight;
                        tagboxAnswer = response;
                    }
                }

                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: tagboxAnswer,
                    score: tagboxScore
                });
                totalScore += tagboxScore;
                break;

            case "boolean":
                let booleanScore = 0;
                let booleanAnswer = '';
                if (response === true) {
                    booleanScore = 1;  // or any value based on your scoring rules
                    booleanAnswer = "Yes";
                } else if (response === false) {
                    booleanScore = 0;  // or any value based on your scoring rules
                    booleanAnswer = "No";
                }

                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: booleanAnswer,
                    score: booleanScore
                });

                totalScore += booleanScore;
                break;

            case "imagepicker":
                let imageScore = 0;
                let imageAnswer = '';
                // Handle image picker response
                const imageChoice = questionElement.choices.find(choice => choice.value === response);
                if (imageChoice) {
                    imageScore = imageChoice.weight;
                    imageAnswer = response;
                }

                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: imageAnswer,
                    score: imageScore
                });

                totalScore += imageScore;
                break;

            case "ranking":
                let rankingScore = 0;
                let rankingAnswer = '';
                // Handle ranking response
                if (Array.isArray(response)) {
                    rankingAnswer = response.join(', ');
                    response.forEach((item, index) => {
                        const rankingChoice = questionElement.choices.find(choice => choice.value === item);
                        if (rankingChoice) {
                            // You could assign the weight based on position or choice, e.g. index + 1
                            rankingScore += rankingChoice.weight * (index + 1);  // Modify as needed based on your scoring rules
                        }
                    });
                }

                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: rankingAnswer,
                    score: rankingScore
                });

                totalScore += rankingScore;
                break;

            case "text":
            case "comment":
                const textAnswer = response;
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: textAnswer,
                    score: 0
                });
                break;

            case "multipletext":
                let multipleTextScore = 0;
                let multipleTextAnswer = '';

                // Handle each item within the multipletext question
                questionElement.items.forEach(item => {
                    const itemAnswer = response[item.name];
                    multipleTextAnswer += `${item.title}: ${itemAnswer || 'No answer'}\n`;

                    // Assuming a scoring rule of 1 per valid answer
                    if (itemAnswer) {
                        multipleTextScore += 1;
                    }
                });

                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: multipleTextAnswer.trim(),
                    score: multipleTextScore
                });

                totalScore += multipleTextScore;
                break;

            case "matrix":
                let matrixScore = 0;
                let matrixAnswer = '';

                // Iterate through rows and columns
                Object.keys(response).forEach(row => {
                    const column = response[row];
                    matrixAnswer += `${row}: ${column || 'No answer'}\n`;

                    // Assuming score is based on the column's position (you can customize this logic)
                    const columnIndex = questionElement.columns.indexOf(column);
                    if (columnIndex !== -1) {
                        matrixScore += columnIndex + 1;  // You can adjust the scoring logic here
                    }
                });

                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: matrixAnswer.trim(),
                    score: matrixScore
                });

                totalScore += matrixScore;
                break;

            case "matrixdropdown":
                let matrixDropdownScore = 0;
                let matrixDropdownAnswer = '';

                // Iterate through rows and columns
                Object.keys(response).forEach(row => {
                    const columnResponses = response[row];
                    matrixDropdownAnswer += `${row}:\n`;

                    Object.keys(columnResponses).forEach(column => {
                        const columnValue = columnResponses[column];
                        matrixDropdownAnswer += `  ${column}: ${columnValue || 'No answer'}\n`;

                        // Get the weight of the chosen value
                        const choice = questionElement.choices.find(choice => choice.value === columnValue);
                        if (choice) {
                            matrixDropdownScore += choice.weight;
                        }
                    });
                });

                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: matrixDropdownAnswer.trim(),
                    score: matrixDropdownScore
                });

                totalScore += matrixDropdownScore;
                break;
    

            default:
                console.warn(`Unknown question type: ${questionElement.type}`);
                break;
        }
    });

    return { totalScore, questionDetails };
};

const savePdf = function(surveyData) {
    const { jsPDF } = window.jspdf;
    const surveyPdf = new jsPDF();
    surveyPdf.text("Survey Results", 20, 20);
  
    let yPosition = 30;
    const margin = 20; // Left margin
    const lineHeight = 10; // Vertical spacing between lines
    const maxYPosition = 250; // Max Y position for content (approaching bottom of page)
  
    // Loop through question details and add them to the PDF
    surveyData.questionDetails.forEach((question) => {
        // Check if we need to add a new page (if we exceed the max Y position)
        if (yPosition + lineHeight > maxYPosition) {
            surveyPdf.addPage(); // Add a new page
            yPosition = 20; // Reset Y position for the new page
        }
    
        // Add question and answer to the PDF
        surveyPdf.text(`${question.name}: ${question.title}`, margin, yPosition);
        yPosition += lineHeight;



        // Add question type 
        surveyPdf.text(`Type: ${question.type}`, margin, yPosition); 
        yPosition += lineHeight;

        // Add score
        surveyPdf.text(`Score: ${question.score}`, margin, yPosition);
        yPosition += lineHeight;

        // Add question answer
            // surveyPdf.text(`Answer: ${question.answer}`, margin, yPosition); 
            // yPosition += lineHeight;

        // Add the answer(s) with extra padding for multiple answers
        if (Array.isArray(question.answer)) {
            question.answer.forEach((answer, index) => {
            if (yPosition + lineHeight > maxYPosition) {
                surveyPdf.addPage();
                yPosition = 20;
            }
            surveyPdf.text(`Answer: ${question.answer}`, margin, yPosition);
            yPosition += lineHeight;
            });
        } else {
            // Add a single answer
            if (yPosition + lineHeight > maxYPosition) {
            surveyPdf.addPage();
            yPosition = 20;
            }
            surveyPdf.text(`Answer: ${question.answer}`, margin, yPosition);
            yPosition += lineHeight;
        }

        // Add space for next question
        yPosition += 2*lineHeight;


        });
        
        // Add space for the final results
        yPosition += 4*lineHeight;
        // Add the total score to the PDF
        if (surveyData.totalScore !== undefined) {
        // Check if we need to add a new page before the total score
        if (yPosition + lineHeight > maxYPosition) {
            surveyPdf.addPage();
            yPosition = 20;
        }
        surveyPdf.text(`Total Score: ${surveyData.totalScore}`, margin, yPosition);
        } else {
        surveyPdf.text("Total Score: 0", margin, yPosition); // If undefined, show as 0
        }
    
        // Save the PDF
        surveyPdf.save("survey_results.pdf");
  };
  
  
function SurveyComponent() {
  const survey = new Survey.Model(json_simple);
  const [surveyData, setSurveyData] = React.useState(null); // Set to null initially

  survey.onComplete.add((sender, options) => {
    const { totalScore, questionDetails } = calculateScore(sender.data, json_simple);
    setSurveyData({ totalScore, questionDetails }); // Set both total score and question details
  });

  const handleSavePdf = () => {
    if (surveyData) {
      savePdf(surveyData);  // Pass the whole surveyData to savePdf
    }
  };

  return (
    <>
      <SurveyReact.Survey model={survey} />
      {surveyData && (
        <div id="savePdfButtonContainer">
        <button onClick={handleSavePdf} id="savePdfButton">Save as PDF</button>
        </div>
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("surveyElement"));
root.render(<SurveyComponent />);
