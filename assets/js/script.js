//Start button
var startQuiz = document.getElementById("start");
var quizQuestions = document.getElementById("questions");
var choices = document.getElementById("choices");
//When we hit the start button we need to load the first question ans start question the timer

function launchQuiz(){

    for (let i = 0; i <= questions.length; i++) {
        //Display the question
        quizQuestions.setAttribute("class", "start");
        quizQuestions.textContent=questions[i].title;
        
        //display the choices
        for (let qChoices = 0; qChoices <= questions[i].qChoices; qChoices++) {
            
        }
        
        //questions[i].
    }
}

function startQuestionTimer(){

}




startQuiz.addEventListener("click",launchQuiz);
//Timer1 - the time you have to complere the test
//Timer2 - how long any messaging will appear on answergin a question (right or wrong)

