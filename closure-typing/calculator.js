function calculator(str) {
    var operator = '';
    var hereLiesOperator;
    var result;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/') {
            operator = str[i];
            hereLiesOperator = i;
        }
    }
    var first = +str.substring(0, hereLiesOperator);
    var second = +str.substring(hereLiesOperator + 1, str.length);
    switch (operator) {
        case '+':
            result = first + second;
            return result;
        case '-':
            result = first - second;
            return result;
        case '*':
            result = first * second;
            return result;
        case '/':
            result = first / second;
            return result;
    }
    return result;

}

module.exports = calculator;