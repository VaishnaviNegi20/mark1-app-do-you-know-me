// i/p processing and o/p
import readlineSync from 'readline-sync';
import chalk from 'chalk';
import chalkRainbow from 'chalk-rainbow';
var score = 0;

function welcome() {
  var userName = readlineSync.question("What is your name? ");
  console.log(chalk.blue("Welcome " + userName + ", Let's see,do YOU know Vaishnavi? "));
}

//highScore data
var highScores = [
  {
    name: chalk.bold("Vaishnavi"),
    score: 5
  },
  {
    name: chalk.bold("Yash"),
    score: 4
  }
]

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.greenBright(("you are right!")));
    score++;
  }
  else {
    console.log(chalk.redBright(("sorry, you are wrong! ")));
  }
  console.log(chalk.cyan(("your current score is: ", score)));
  console.log(chalkRainbow("~~~~~~~~~~~~~~"));
}


//questionnaire
var questions = [
  {
    question: "favourite color ",
    answer: "black"
  },
  {
    question: "where do I live? ",
    answer: "Uttarakhand"
  },
  {
    question: "Do I like singing? ",
    answer: "yes"
  },
  {
    question: "Do I like ironing? ",
    answer: "no"
  },
  {
    question: "Do I like sketching? ",
    answer: "yes"
  }

];

//for loop 
function game() {
  for (var i = 0; i < questions.length; i++) {
    var nextQuestion = questions[i];
    play(nextQuestion.question, nextQuestion.answer)
  }
}

function scores() {
  console.log(chalk.hex('#FFA500').inverse.bold("Congrats! Your total score is :", score));
  console.log(chalk.underline("Here are the high scores ==>"));
  highScores.map(score => console.log(score.name, ":", score.score))
  console.log(chalk.bgYellowBright("If your score is more than highscore, send me the screenshot. I'll update it."));
  console.log(chalkRainbow("Have a great day :)"));
}

welcome();
game();
scores();