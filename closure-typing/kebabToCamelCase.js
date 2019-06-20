function kebabToCamelCase(inputString) {
    var result = "";
    var temp;
  for (var i = 0; i < inputString.length; i++){
      temp = inputString[i];
      if (temp === "-"){
          temp = inputString[i + 1].toUpperCase();
          i++
      }
      result = result + temp;
  }
  return result
}
module.exports = kebabToCamelCase;