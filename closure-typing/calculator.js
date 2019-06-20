function calculator(inputString) {
    var first = parseInt(inputString);
    var lengthOfFirst = first.toString().length;
    var second = +inputString.substring(lengthOfFirst + 1);
    var sign = inputString.substring(first.toString().length, first.toString().length + 1);
    switch (sign) {
        case "-" : return first - second;
        case "+" : return  first + second;
        case  "/" : return  first / second;
        case  "*" : return  first * second;
    }
}
module.exports = calculator;