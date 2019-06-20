function kebabToCamelCase(userInput) {
  var char;
  var newString = "";  

  for (let i = 0; i < userInput.length; i++) {
    char = userInput[i];
    if (char == '-') {
      char = userInput[i + 1].toUpperCase();
      i++;
    }
    newString = newString + char;
  }
  return newString;
}

module.exports = kebabToCamelCase;