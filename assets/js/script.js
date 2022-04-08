//Start button
var startQuiz = document.getElementById("start");
var quizQuestions = document.getElementById("questions");
var choices = document.getElementById("choices");
var questionTimer = document.getElementById("time");
var qAndABlock = document.getElementById("questions");
var startBlock = document.getElementById("start-block");
var questionTimeLeft = 10;
var questionAnswered = false;
var questionDisplayed
var renderedAnswers = document.querySelectorAll("choices");
var selectedAnswer;
var questionAnswerObj = {
    userInitials: "",
    answerDetail: [{
        questionNo: 0,
        answerGiven: "",
        correctAnswer: false,

    }]
}
var correctAnswer = "";
var newOl = document.createElement("ul");
var idx = 0;

//When we hit the start button we need to load the first question ans start question the timer

function launchQuiz() {
    startQuestionTimer();
    //OUTER loop foir quesitons
    questionAnswered = false;
    questionDisplayed = false;
    
    while (questionAnswered == false && questionDisplayed == false) {

        //for (let i = 0; i <= questions.length; i++) {

        while (questionDisplayed == false) {
            //Display the question
            displayQuestion(idx);
            displayChoices(idx);
            questionDisplayed = true;
            idx++; //need to set the max number yet
        }
      }
}

function displayQuestion(quesitonIndex) {
    quizQuestions.setAttribute("class", "start");
    startBlock.setAttribute("class", "hide");

    quizQuestions.textContent = questions[quesitonIndex].title;
    correctAnswer = questions[quesitonIndex].answer;

    //var newOl = document.createElement("ol");
    newOl.setAttribute("id", "choices");
    qAndABlock.appendChild(newOl);
}

function displayChoices(questionIndex) {
    //Clear out the node




    for (let qChoices = 0; qChoices < questions[questionIndex].choices.length; qChoices++) {
        var newLi = document.createElement("li");
        var newButton = document.createElement("button");
        newButton.setAttribute("class", "choices button")
        newOl.appendChild(newLi);
        newLi.appendChild(newButton);
        newButton.textContent = questions[questionIndex].choices[qChoices];
    }
}

function processAnswer(event) {
    console.log("button pressed");
    console.log(event.target.textContent);
    selectedAnswer = event.target.textContent;
    if (selectedAnswer == correctAnswer) {
        //Process a correct answer
        console.log("Answer Correct");
        answerGiven = true;
        const choicesNode = document.getElementById("choices");

        while (choicesNode.firstChild) {
            choicesNode.removeChild(choicesNode.lastChild);
        }
        launchQuiz();
    }
    else {
        //process and incorrect answer
        console.log("Answer incorrect");
        //display information
        //reduce the current timer by 10 seconds
        return;
    }

    //persist the answer
    var curentQuestion = questionAnswerObj.answerDetail.length;
    questionAnswerObj.answerDetail[curentQuestion].a
    //questionAnswerObj=

    //console.log(event);
}
function startQuestionTimer() {

    var timeInterval = setInterval(aTimer, 1000);
}

function aTimer() {

    if (questionTimeLeft >= 0) {

        questionTimer.textContent = questionTimeLeft;

        questionTimeLeft--;
        // } else if (timeLeft === 1) {

        //     questionTimer.textContent = timeLeft;
        //     timeLeft--;
        // } else {

        //     timerEl.textContent = '';

        //     clearInterval(timeInterval);
    }
}





startQuiz.addEventListener("click", launchQuiz);

questions.addEventListener('click', function (event) {
    //event.preventDefault();
    processAnswer(event);
    return;

});


