//add li items
//look in storage for the scores

var scoresList = document.getElementById("highscores");

var scores = JSON.parse(localStorage.getItem("scores"));
displayScores();

function displayScores(){
    for (var i = 0; i < scores.length; i++){
        var newLi = document.createElement("li");
        newLi.textContent = scores[i].userInitials + ": " + scores[i].userScore;
        scoresList.appendChild(newLi);
    }
}


addEventListener("click", function(event){
        if(event.target.id === "clear"){
        localStorage.clear();
        scoresList.innerHTML = "";
    }
});
