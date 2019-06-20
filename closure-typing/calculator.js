function calculator(inputStr) {
    var posOfOperator = 0;
    var operator, firstOperand, secondOperand, result;
    if(inputStr){
        if(~inputStr.indexOf("+"))
            posOfOperator = inputStr.indexOf("+");
        else if(~inputStr.indexOf("-"))
            posOfOperator = inputStr.indexOf("-");
        else if(~inputStr.indexOf("*"))
            posOfOperator = inputStr.indexOf("*");
        else if(~inputStr.indexOf("/"))
            posOfOperator = inputStr.indexOf("/");
        if(posOfOperator){
            operator = inputStr[posOfOperator];
            firstOperand = +inputStr.substring(0,posOfOperator);
            secondOperand = +inputStr.substring(posOfOperator+1);
            if(firstOperand && secondOperand){
                switch (operator) {
                    case '+':
                        result = firstOperand + secondOperand;
                        break;
                    case '-':
                        result = firstOperand - secondOperand;
                        break;
                    case '*':
                        result = firstOperand * secondOperand;
                        break;
                    case '/':
                        result = firstOperand / secondOperand;
                        break;
                }
            }
        }
        return result;
    }
}

module.exports = calculator;