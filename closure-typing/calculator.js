function calculator(a) {
   let regexp = new RegExp(/\+|\-|\*|\//)
    let numFirst = +a.split(regexp)[0];
    let numSecond = +a.split(regexp)[1];

    //I am convinced that there is an opportunity to split the string with storing 'separator'?
    let sign = a.substring(numFirst.toString().length, numFirst.toString().length + 1);

    //In the future, I need to try to save all the supported 'sings' (separators for the split) in array and then move them
    // to sort out for the split and math operations.
    switch (sign) {
        case ("+"):
            return numFirst + numSecond;
        case ("-"):
            return numFirst - numSecond;
        case ("*"):
            return numFirst * numSecond;
        case ("/"):
            return numFirst / numSecond;
        default:
            alert("Unsupported Operation!");
    }
}

module.exports = calculator;