# Timed Quiz

## Notes

A simple application that takes the user through a timed quiz.  

The quiz questions are provided in questions.js.  A better way to do this might be through the use of a back-end data source allowing for administrative changes to the questions and answers.

The quiz stores its answers in browser storage which could also benefit from a back-end database to allow scores to be persisted across browsers.

The code, as write, makes extensive use of global variables, which would seem inefficient.  A refactoring to make use of objects and passing these round might make the code more maintainable.

## Application Details

### Deployment

https://chrisaylen.github.io/CodeQuiz/

### Screenshots

![Quiz Start](./assets/imgs/start.png)
![Quiz Questions](./assets/imgs/quiz.png)
![Quiz Enter initials](./assets/imgs/initials.png)
![Quiz HighScores](./assets/imgs/highscores.png)



