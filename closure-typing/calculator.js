function calculator(str) {
  var mathFuncList = {
    '+' : (a, b) => {return +a + +b},
    '-' : (a, b) => {return a - b},
    '*' : (a, b) => {return a * b},
    '/' : (a, b) => {return a / b}
  }
  arr = str.replace(/([+\-*/])/g, ' $1 ').split(' ')

  while (arr.length > 1){
    i = arr.indexOf('*')
    i < 0 ? i = arr.indexOf('/') : i
    i < 0 ? i = arr.indexOf('+') : i
    i < 0 ? i = arr.indexOf('-') : i
    arr[i-1] = mathFuncList[arr[i]](arr[i-1], arr[i+1])
    arr.splice(i, 2)
  }
  return arr[0]
}

module.exports = calculator;
