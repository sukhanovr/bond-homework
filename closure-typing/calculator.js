function calculator(inputExp) {

    let reDecimal = new RegExp(/\d+(\.\d{0,2})?/);

    if (reDecimal.test(inputExp)) {
		
        let mathOperator = inputExp.match(/[\+\-\/\*\(]/)[0];
        let nums = inputExp.split(mathOperator, 2);
		
        if (mathOperator === '+') {
            return +nums[0] + +nums[1];
        } else if (mathOperator === '-') {
            return +nums[0] - +nums[1];
        } else if (mathOperator === '*') {
            return +nums[0] * +nums[1];
        } else if (mathOperator === '/') {
            return +nums[0] / +nums[1];
        } else {
            return 'another math operations'
        }
    } else {
        return 'incorrect expression';
    }
}

module.exports = calculator;