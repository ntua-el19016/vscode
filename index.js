const calculateScore = function(surveyData, surveyJson) {
    let score1 = 0;
    let score2 = 0;
    const questionDetails = [];  // To store question details for the PDF report

    // Iterate through the survey data responses
    Object.keys(surveyData).forEach(question => {
        const response = surveyData[question];
        const questionElement = surveyJson.pages.flatMap(page => page.elements).find(element => element.name === question);

        if (!questionElement) {
            console.warn(`Question ${question} not found in survey JSON`);
            return;
        }

        let questionScore1 = 0;
        let questionScore2 = 0;
        let questionAnswer = '';

        // Handle different question types using a switch-case
        switch (questionElement.type) {
            case "radiogroup":
            case "checkbox":
                if (Array.isArray(response)) {
                    questionAnswer = response.join(', ');
                    response.forEach(answer => {
                        const choice = questionElement.choices.find(choice => choice.value === answer);
                        if (choice) {
                            questionScore1 += choice.weight1;
                            questionScore2 += choice.weight2;
                        }
                    });
                } else {
                    questionAnswer = response;
                    const choice = questionElement.choices.find(choice => choice.value === response);
                    if (choice) {
                        questionScore1 += choice.weight1;
                        questionScore2 += choice.weight2;
                    }
                }
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: questionAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;

                break;

            case "rating":
                const ratingAnswer = response;
                questionScore1 = ratingAnswer;
                questionScore2 = ratingAnswer;  // If needed, adjust scoring
                questionAnswer = ratingAnswer;

                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: questionAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;

                break;

            case "dropdown":
                const dropdownChoice = questionElement.choices.find(choice => choice.value === response);
                if (dropdownChoice) {
                    questionScore1 = dropdownChoice.weight1;
                    questionScore2 = dropdownChoice.weight2;
                    questionAnswer = response;
                }
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: questionAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;

                break;

            case "tagbox":
                if (Array.isArray(response)) {
                    questionAnswer = response.join(', ');
                    response.forEach(answer => {
                        const tagboxChoice = questionElement.choices.find(choice => choice.value === answer);
                        if (tagboxChoice) {
                            questionScore1 += tagboxChoice.weight1;
                            questionScore2 += tagboxChoice.weight2;
                        }
                    });
                } else {
                    const tagboxChoice = questionElement.choices.find(choice => choice.value === response);
                    if (tagboxChoice) {
                        questionScore1 = tagboxChoice.weight1;
                        questionScore2 = tagboxChoice.weight2;
                        questionAnswer = response;
                    }
                }
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: questionAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;
                break;

            case "boolean":
                if (response === true) {
                    questionScore1 += questionElement.weight1true;
                    questionScore2 += questionElement.weight2true; // You can adjust these values as per your needs
                    questionAnswer = "Yes";
                } else if (response === false) {
                    questionScore1 += questionElement.weight1false
                    questionScore2 += questionElement.weight2false
                    questionAnswer = "No";
                }
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: questionAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;
                break;

            case "imagepicker":
                const imageChoice = questionElement.choices.find(choice => choice.value === response);
                if (imageChoice) {
                    questionScore1 = imageChoice.weight1;
                    questionScore2 = imageChoice.weight2;
                    questionAnswer = response;
                }
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: questionAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;
                break;

            case "ranking":
                if (Array.isArray(response)) {
                    questionAnswer = response.join(', ');
                    response.forEach((item, index) => {
                        const rankingChoice = questionElement.choices.find(choice => choice.value === item);
                        if (rankingChoice) {
                            questionScore1 += rankingChoice.weight1 * (index + 1);
                            questionScore2 += rankingChoice.weight2 * (index + 1);
                        }
                    });
                }
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: questionAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;
                break;

            case "text":
            case "comment":
                questionAnswer = response;
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: questionAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;
                break;

            case "multipletext":
                let multipleTextScore1 = 0;
                let multipleTextScore2 = 0;
                let multipleTextAnswer = '';

                questionElement.items.forEach(item => {
                    const itemAnswer = response[item.name];
                    multipleTextAnswer += `${item.title}: ${itemAnswer || 'No answer'}\n`;

                    if (itemAnswer) {
                        multipleTextScore1 += 1;
                        multipleTextScore2 += 1; // Adjust as per your rules
                    }
                });
                questionScore1 = multipleTextScore1;
                questionScore2 = multipleTextScore2;
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: multipleTextAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;
                break;

            case "matrix":
                let matrixScore1 = 0;
                let matrixScore2 = 0;
                let matrixAnswer = '';
                Object.keys(response).forEach(row => {
                    const column = response[row];
                    matrixAnswer += `${row}: ${column || 'No answer'}\n`;
                    const columnIndex = questionElement.columns.indexOf(column);
                    if (columnIndex !== -1) {
                        matrixScore1 += columnIndex + 1;  // Customize scoring
                        matrixScore2 += columnIndex + 1;
                    }
                });
                questionScore1 = matrixScore1;
                questionScore2 = matrixScore2;
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: matrixAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;
                break;

            case "matrixdropdown":
                let matrixDropdownScore1 = 0;
                let matrixDropdownScore2 = 0;
                let matrixDropdownAnswer = ''
                Object.keys(response).forEach(row => {
                    const columnResponses = response[row];
                    matrixDropdownAnswer += `${row}:\n`;
                    Object.keys(columnResponses).forEach(column => {
                        const columnValue = columnResponses[column];
                        matrixDropdownAnswer += `  ${column}: ${columnValue || 'No answer'}\n`;
                        const choice = questionElement.choices.find(choice => choice.value === columnValue);
                        if (choice) {
                            matrixDropdownScore1 += choice.weight1;
                            matrixDropdownScore2 += choice.weight2;
                        }
                    });
                });
                questionScore1 = matrixDropdownScore1;
                questionScore2 = matrixDropdownScore2;
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: matrixDropdownAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;
                break;

            default:
                console.warn(`Unknown question type: ${questionElement.type}`);
                break;
        }
    });

    return { score1, score2, totalScore: score1 + score2, questionDetails };
};

const savePdf = function(surveyData) {
    const { jsPDF } = window.jspdf;
    const surveyPdf = new jsPDF();
    surveyPdf.text("Survey Results", 20, 20);

    let yPosition = 30;
    const margin = 20;
    const lineHeight = 10;
    const maxYPosition = 250;

    surveyData.questionDetails.forEach((question) => {
        if (yPosition + lineHeight > maxYPosition) {
            surveyPdf.addPage();
            yPosition = 20;
        }

        surveyPdf.text(`${question.name}: ${question.title}`, margin, yPosition);
        yPosition += lineHeight;
        surveyPdf.text(`Type: ${question.type}`, margin, yPosition);
        yPosition += lineHeight;
        surveyPdf.text(`Score1: ${question.score1}`, margin, yPosition);
        yPosition += lineHeight;
        surveyPdf.text(`Score2: ${question.score2}`, margin, yPosition);
        yPosition += lineHeight;

        if (Array.isArray(question.answer)) {
            question.answer.forEach((answer) => {
                if (yPosition + lineHeight > maxYPosition) {
                    surveyPdf.addPage();
                    yPosition = 20;
                }
                surveyPdf.text(`Answer: ${answer}`, margin, yPosition);
                yPosition += lineHeight;
            });
        } else {
            if (yPosition + lineHeight > maxYPosition) {
                surveyPdf.addPage();
                yPosition = 20;
            }
            surveyPdf.text(`Answer: ${question.answer}`, margin, yPosition);
            yPosition += lineHeight;
        }

        yPosition += 2 * lineHeight;
    });

    yPosition += 4 * lineHeight;
    if (surveyData.score1 !== undefined) {
        if (yPosition + lineHeight > maxYPosition) {
            surveyPdf.addPage();
            yPosition = 20;
        }
        surveyPdf.text(`Total Score 1: ${surveyData.score1}`, margin, yPosition);
    } else {
        surveyPdf.text("Total Score 1: 0", margin, yPosition);
    }


    yPosition += 2 * lineHeight;
    if (surveyData.score2 !== undefined) {
        if (yPosition + lineHeight > maxYPosition) {
            surveyPdf.addPage();
            yPosition = 20;
        }
        surveyPdf.text(`Total Score 2: ${surveyData.score2}`, margin, yPosition);
    } else {
        surveyPdf.text("Total Score 2: 0", margin, yPosition);
    }

    yPosition += 2 * lineHeight;
    if (surveyData.totalScore !== undefined) {
        if (yPosition + lineHeight > maxYPosition) {
            surveyPdf.addPage();
            yPosition = 20;
        }
        surveyPdf.text(`Total Score: ${surveyData.totalScore}`, margin, yPosition);
    } else {
        surveyPdf.text("Total Score: 0", margin, yPosition);
    }

    surveyPdf.save("survey_results.pdf");
};

function SurveyComponent() {
    const survey = new Survey.Model(json_simple);
    const [surveyData, setSurveyData] = React.useState(null); // Set to null initially
    const [isSurveyCompleted, setIsSurveyCompleted] = React.useState(false); // Track survey completion
  
    survey.onComplete.add((sender, options) => {
        const { score1, score2, totalScore, questionDetails } = calculateScore(sender.data, json_simple);
        setSurveyData({ score1, score2, totalScore, questionDetails }); // Set both total score and question details
        setIsSurveyCompleted(true); // Mark the survey as completed
    });
  
    const handleSavePdf = () => {
        if (surveyData) {
            savePdf(surveyData);  // Pass the whole surveyData to savePdf
        }
    };

    const handleCloseModal = () => {
        setIsSurveyCompleted(false); // Close the modal
    };
  
    return (
      <>
        <SurveyReact.Survey model={survey} />
        
        {isSurveyCompleted && (
          <div id="savePdfModal" style={modalStyle}>
            <div style={modalContentStyle}>
              <h3>Thank you for completing the survey!</h3>
              <p>Would you like to save your results as a PDF?</p>
              <button onClick={handleSavePdf} id="savePdfButton" style={savePdfButtonStyle}>Save as PDF</button>
              <button onClick={handleCloseModal} style={closeButtonStyle}>Close</button>
            </div>
          </div>
        )}
      </>
    );
}

// Styles for the modal pop-up
const modalStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
};

const modalContentStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "center",
    width: "300px",
};

// Style for the Save as PDF button
const savePdfButtonStyle = {
    backgroundColor: "#4CAF50", // Green
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "10px",
};

// Style for the Close button (red background)
const closeButtonStyle = {
    backgroundColor: "#f44336", // Red
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
};



// Rendering the component
const root = ReactDOM.createRoot(document.getElementById("surveyElement"));
root.render(<SurveyComponent />);
