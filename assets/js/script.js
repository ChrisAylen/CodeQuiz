//Start button
var startQuiz = document.getElementById("start");
var quizQuestions = document.getElementById("questions");
var choices = document.getElementById("choices");
var questionTimer = document.getElementById("time");
var qAndABlock = document.getElementById("questions");
var startBlock = document.getElementById("start-block");
var feedback = document.getElementById("feedback");
var endScreen = document.getElementById("end-screen");
var submitScores = document.getElementById("submit");

var questionTimeLeft = 60;
var timeLeftAtEnd;

var questionAnswered = false;
var questionDisplayed
var renderedAnswers = document.querySelectorAll("choices");
var selectedAnswer;
var questionAnswerObj = {
    userInitials: "",
    answerDetail: [{
        timeLeft: 0,

    }]
}
var userScore = {
    userInitials: "",
    userScore: 0
}
var userScores = [];
var questionsCorrect = 0;
var correctAnswer = "";
var newOl = document.createElement("ul");
var idx = 0;
var timeInterval;

var quizEndHasRun = false;

//When we hit the start button we need to load the first question ans start question the timer

function launchQuiz() {
    startQuestionTimer();
    //OUTER loop for quesitons
    quizComplete = false;
    questionDisplayed = false;

    while (quizComplete == false && questionDisplayed == false) {

        if (idx < questions.length) {
            displayQuestion(idx);
            displayChoices(idx);
            questionDisplayed = true;
            idx++;
        }
        else {
            //end the quiz
            endQuiz();
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
        //Clear out the choices node
        const choicesNode = document.getElementById("choices");

        while (choicesNode.firstChild) {
            choicesNode.removeChild(choicesNode.lastChild);
        }
        questionsCorrect++;
        feedback.setAttribute("class", "hide");
        console.log(questionsCorrect);
        launchQuiz();
    }
    else {
        //process and incorrect answer
        console.log("Answer incorrect");
        //reduce the timer by 10 seconds
        questionTimeLeft -= 10;

        feedback.setAttribute("class", "feedback");
        newP = document.createElement("p");
        feedback.appendChild(newP);
        feedback.textContent = "Wrong Answer";

        //display the feedback by setting class set to start

        return;
    }

}

function endQuiz() {
    quizEndHasRun = true;
    timeLeftAtEnd = questionTimeLeft;
    questionTimeLeft = 0;

    clearInterval(timeInterval);
    quizComplete = true;
    quizQuestions.setAttribute("class", "hide");
    choices.setAttribute("class", "hide");
    endScreen.setAttribute("class", "start");
    document.getElementById("final-score").textContent = timeLeftAtEnd;
    //Check for pre-existing scores
    if (localStorage.getItem("scores") != null) {
        userScores = JSON.parse(localStorage.getItem("scores"));
    }
}

function populateData() {
    var userInitials = document.getElementById("initials").value;
    userScore.userInitials = userInitials;
    userScore.userScore = timeLeftAtEnd;
    userScores.push(userScore);

    endScreen.textContent = "Your score is " + timeLeftAtEnd;

    localStorage.setItem("scores", JSON.stringify(userScores));
    window.location.href = "highscores.html";

}



function startQuestionTimer() {
    timeInterval = setInterval(aTimer, 1000);
}

function aTimer() {
    if (questionTimeLeft >= 0) {
        questionTimer.textContent = questionTimeLeft;
        questionTimeLeft--;
    }
    else {
        if (quizEndHasRun == false) {

            clearInterval(timeInterval);
            questionTimeLeft = 0;
            //timeLeftAtEnd=0;
            feedback.setAttribute("class", "feedback");
            newP = document.createElement("p");
            feedback.appendChild(newP);
            feedback.textContent = "You ran out of time!";
            endQuiz();
        }
    }
}

startQuiz.addEventListener("click", launchQuiz);

questions.addEventListener('click', function (event) {
    //event.preventDefault();
    processAnswer(event);
    return;

});

submitScores.addEventListener("click", function (event) {
    clearInterval(timeInterval);
    populateData();
});


