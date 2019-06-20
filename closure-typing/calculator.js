function calculator(e) {
    // your code here

    let value = 0;
    let action = '';
    let result = 0;
    let index = 0;

    for(let i=0; i< e.length; i++){

        if( '+-/*'.includes(e[i]) || i === e.length-1){

            if (result === 0) {
                result = e.substring(0, e.indexOf(e[i]));
                action = e[i];
                index = e.indexOf(e[i]) + 1;
                continue;
            }

            value = e.substring(index, e.indexOf(action, index) === -1 ? e.length : e.indexOf(action, index));
            index = e.indexOf(action, index) + 1;

            switch(action){
                case '+':
                    result = +result + +value;
                    break;
                case '-':
                    result -= value;
                    break;
                case '/':
                    result /= value;
                    break;
                case '*':
                    result *= value;
                    break;
            }
            action = e[i];
        }
    }
    return result;
}

module.exports = calculator;