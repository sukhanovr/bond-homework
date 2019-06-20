function calculator() {
  let a = arguments[0], result = 0, a1='', a2='', sign='';
  for (let i = 0; i < a.length; i++){
      if((a.charAt(i) > 0 || +a.charAt(i) === 0) && sign === ''){
        a1 += a.charAt(i);
      }
      else if (sign === '') {
        sign = a.charAt(i);
      }
      else{
        a2 += a.charAt(i);
      }
  }
  switch(sign){
      case '+': result = +a1 + +a2; break;
      case '-': result = a1 - a2; break;
      case '*': result = a1 * a2; break;
      case '/': result = a1 / a2; break;
  }
  return result;
}
/*
//more beautiful
function calculator() {
    let a = arguments[0], sign='', placeIndex = 0, a1='', a2='', result = 0;

    if (a.indexOf('+')>0){sign = '+';}
      else
    if (a.indexOf('-')>0) {sign = '-';}
      else
    if (a.indexOf('*')>0) {sign = '*';}
      else
    if (a.indexOf('/')>0) {sign = '/';}

    placeIndex = a.indexOf(sign);

    a1 = a.slice(0, placeIndex);
    a2 = a.slice(placeIndex + 1, a.length);

    switch(sign){
        case '+': result = +a1 + +a2; break;
        case '-': result = a1 - a2; break;
        case '*': result = a1 * a2; break;
        case '/': result = a1 / a2; break;
    }

    return result;

}

*/


module.exports = calculator;
