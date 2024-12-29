/*
const pdfDocOptions = {
    fontSize: 12
  };

const savePdf = function (surveyData) {
    const surveyPdf = new SurveyPDF(json_simple, pdfDocOptions);
    surveyPdf.data = surveyData;
    surveyPdf.save("results.pdf");
  };

function SurveyComponent() {
    const survey = new Survey.Model(json_simple);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
        // savePdf(sender.data)
        // alert(sender.data);
    });
    survey.addNavigationItem({
        id: "pdf-export",
        title: "Save as PDF",
        action: () => savePdf(sender.data)
      });
    return (<SurveyReact.Survey model={survey} />);
}

const root = ReactDOM.createRoot(document.getElementById("surveyElement"));
root.render(<SurveyComponent />);
*/
// Import jsPDF
const { jsPDF } = window.jspdf;  // Destructure jsPDF from the global window.jspdf object

// Options for the PDF document
const pdfDocOptions = {
    fontSize: 12
};

// Function to generate and download the PDF
const savePdf = function (surveyData) {
    if (!surveyData) {
        console.error("No survey data available to generate PDF");
        return;
    }

    // Initialize jsPDF
    const doc = new jsPDF();

    // Example: Add the survey data to the PDF
    const surveyText = JSON.stringify(surveyData, null, 3);  // Format the survey data as a string
    doc.text(surveyText, 10, 10);  // Positioning text in the PDF

    // Trigger the PDF download
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
                savePdf(surveyData);  // Pass the survey data to the savePdf function
            } else {
                console.error("Survey data is not available yet.");
            }
        },
        enabled: !!surveyData  // Disable the button if surveyData is not available
    });
    

    return <SurveyReact.Survey model={survey} />;
}

// Render the Survey Component to the DOM
const root = ReactDOM.createRoot(document.getElementById("surveyElement"));
root.render(<SurveyComponent />);
