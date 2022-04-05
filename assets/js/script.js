//Start button
var startQuiz = document.getElementById("start");
var quizQuestions = document.getElementById("questions");
var choices = document.getElementById("choices");
var questionTimer = document.getElementById("time");
var qAndABlock = document.getElementById("questions");
var startBlock = document.getElementById("start-block");
var questionTimeLeft = 10;
var questionAnswered = false;
var renderedAnswers = document.querySelectorAll("choices");
//When we hit the start button we need to load the first question ans start question the timer

function launchQuiz() {
    startQuestionTimer();
    for (let i = 0; i <= questions.length; i++) {
        questionAnswered = false
        while (questionAnswered == false) {
            //Display the question

            quizQuestions.setAttribute("class", "start");
            startBlock.setAttribute("class", "hide");

            quizQuestions.textContent = questions[i].title;

            var newOl = document.createElement("ol");
            qAndABlock.appendChild(newOl);
            //display the choices
            for (let qChoices = 0; qChoices < questions[i].choices.length; qChoices++) {
                var newLi = document.createElement("li");
                var newButton = document.createElement("button");
                newButton.setAttribute("class", "choices button")
                newOl.appendChild(newLi);
                newLi.appendChild(newButton);
                newButton.textContent = questions[i].choices[qChoices];
            }
            questionAnswered = true;
        }
    }
}

function processAnswer(event){
    console.log("button pressed");
    console.log(event);
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

//questions.addEventListener("click",processAnswer(event));//.addEventListener("click",processAnswer);


questions.addEventListener('click', function (event) {
    //event.preventDefault();
    console.log(event.target.textContent);
    //console.log(questionAnswered.textContent);
  
    // for (var i = 0; i < elements.length; i++) {
    //   elements[i].textContent = '';
    // }
  });
    //Timer1 - the time you have to complere the test
    //Timer2 - how long any messaging will appear on answergin a question (right or wrong)

