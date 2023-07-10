//Faizan'Calc Program
const Welcome = alert("Welcome in Faizan's CalC")
let result;
//Define Both Input From User in Faizan'Calc
const number1 = parseFloat(prompt('Enter Your First Number :'));
//Define Operator for Task
const operator = prompt("Type your Operator")
//Define Second Input from User in Faizan'Calc
const number2 = parseFloat(prompt('Enter Your Second Number :'));

//If Else Statement for Faizan's CalC
if (operator == "+") {
  result = number1 + number2;
}
else if (operator == "-") {
  result = number1 - number2;
}
else if (operator == "*") {
  result = number1 * number2;
}
else {
  result = number1 / number2;
}
//Result showing Console for Faizan's CalC
console.log(`${number1} ${operator} ${number2} = ${result} `);
const Review = alert("I hope You enjoyed it.")
