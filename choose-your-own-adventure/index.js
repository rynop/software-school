const colors = require("colors");
const prompt = require("prompt-sync")();

class QA {
  static ask(question) {
    return prompt(`${question}? `.yellow.bold);
  }
}

let answer;
if ("Ryan" === QA.ask("What is your name")) {
  answer = QA.ask("What is your age");
  if (Number(answer) <= 10) {
    console.log(`The end: ${answer} is too young!`);
  } else {
    console.log("You win!");
  }
} else {
  console.log("You lose!");
}
