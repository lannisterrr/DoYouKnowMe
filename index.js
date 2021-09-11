var readlineSync = require('readline-sync');

var score = 0;
var userName = readlineSync.question("What is Your Name : ")


console.log("Welcome " + userName +" do you know siddhant")


// high scores

var highScores = [
  {
    name: "Siddhant",
    score: 3,
  },

  {
    name: "Ashu",
    score: 2,
  },
]

// play function
function play(question , answer){
  let userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("right :)");
    score++;
  }else{
    console.log("wrong!")
  }
  console.log("Score is :", score)
  console.log("-----------------")
}



// array of objects
var questions = [
 {
  question: "Who is my favorite superhero? ",
  answer: "Deadpool"
},

 {
  question: "Which is my favorite writer? ",
  answer: "Leo Tolstoy"
},

 {
  question: "Where do I live ",
  answer: "raipur"
}

]

 var game = () => {
   for(let i = 0; i<questions.length; i++){
  let currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}
 }

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}




game();
showScores();
