function calculator(inputString) {
  // declare some variables
  var posOfMathAction, posOfSumSign, posOfSubstractSign, posOfMultiplySign, posOfDivideSign;
  var strLength;
  var firstOperand;
  var secondOperand;
  var operatorPosition, operatorAction;
  var result;
  
  //parse incoming string
  strLength = inputString.length;
  posOfSumSign = +inputString.indexOf('\+');
  posOfSubstractSign = +inputString.indexOf('\-');
  posOfMultiplySign = +inputString.indexOf('\*');
  posOfDivideSign = +inputString.indexOf('\/');
 
  if (posOfSumSign > 0){
	operatorPosition = posOfSumSign
  }
  else if (posOfSubstractSign > 0){
	operatorPosition = posOfSubstractSign
  }
  else if (posOfMultiplySign > 0){
	operatorPosition = posOfMultiplySign
  }
  else{
	operatorPosition = posOfDivideSign
  }
  console.log(operatorPosition)
 
  //assign main operands and operator
  firstOperand = +inputString.substring(0, operatorPosition);
  secondOperand = +inputString.substring(operatorPosition + 1, strLength);
  operatorAction = inputString.substring(operatorPosition, operatorPosition + 1);
  //start calculations depending on operator
  if (operatorAction == '\+') {
	  result = firstOperand + secondOperand;
  }
  if (operatorAction == '\-') {
	  result = firstOperand - secondOperand;
  }
  if (operatorAction == '\*') {
	  result = firstOperand * secondOperand;
  }
  if (operatorAction == '\/') {
	  result = firstOperand / secondOperand;
  }
  console.log('result is: ' + result);
  return result;
  
}

module.exports = calculator;