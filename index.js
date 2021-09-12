const readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;

var nameofPlayer = readlineSync.question("Please enter your name: ");
console.log("Welcome " + chalk.bgYellow(nameofPlayer) + "!");
console.log("Lets begin the game of how well" + " " + chalk.bgMagenta("Do You Know Me!"))


function quiz(ques, ans){
  var answer = readlineSync.question(chalk.yellow(ques));

  if (answer.toLowerCase() == ans.toLowerCase()){
    console.log(chalk.bgGreen("Correct Choice!"))
    score += 1;
  }
  else{
    console.log(chalk.bgRed("Wrong Choice!"))
  }
  console.log("-------------------------------")
}

var high_score_data = [
  {name: "Hrishi", score: 5}, {name: "Su", score: 4}
]

var questionsArr = [
  {
    question: `
    Where am I from? 
    a) Assam
    b) Manipur
    c) Bihar
    d) Karnataka\n`,

    answer: "a"
  },
  {
    question: `
    Which flavour of Ice cream do I like? 
    a) Vanilla
    b) Butterscotch
    c) Mango
    d) Chocolate\n`,

    answer: "a"
  },
  {
    question: `
    I am a fan of which brand? 
    a) Nike
    b) Adidas
    c) Reebok
    d) Puma\n`,

    answer: "b"
  },

  {
    question: `
    I did my B.Tech from which College? 
    a) SMIT
    b) VIT
    c) Amity
    d) LPU\n`,

    answer: "a"
  },

  {
    question: `
    I play which sport? 
    a) Tennis
    b) Table tennis
    c) Football
    d) Basketball\n`,

    answer: "d"
  }

  ]

for (i=0; i< questionsArr.length; i++ ){
  var qu = questionsArr[i]
  quiz(qu.question, qu.answer)
}


console.log(chalk.bgCyan("\nYour score:") + " " + score)
console.log("\nCheck the high scores and contact me if you scored greater than them!")
console.log("\nHigh Scores by others:\n")
for (i=0; i < high_score_data.length; i++){
  var n = high_score_data[i]
  console.log( chalk.yellow(n.name) + ": " + n.score)
}