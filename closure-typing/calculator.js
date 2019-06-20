function calculator(userInput) {
  var operator = '';
  var posOfOperator;
  var result;
  var firstNumber, secondNumber;

  // Search of operator's type and position
  for(let i = 0; i < userInput.length; i++) {
    if (userInput[i] == '+' || userInput[i] == '-' || userInput[i] == '*' || userInput[i] == '/') {
      operator = userInput[i];
      posOfOperator = i;
    }
  }
  // Divide userInput upto two operators
  firstNumber = +userInput.substring(0, posOfOperator);
  secondNumber = +userInput.substring(posOfOperator + 1, userInput.length);
  

  // Main logic

  function ZeroDivisionException(firstNumber, secondNumber){
    if (secondNumber == 0){
      return 0;
    }
    else {
      return firstNumber / secondNumber
    }
  }

  switch (operator){
    case '+':
      result = firstNumber + secondNumber;
      return result;
    case '-':
      result = firstNumber - secondNumber;
      return result;
    case '*':
      result = firstNumber * secondNumber;
      return result;
    case '/':
      result = ZeroDivisionException(firstNumber, secondNumber);
      return result;
  }
}
module.exports = calculator;