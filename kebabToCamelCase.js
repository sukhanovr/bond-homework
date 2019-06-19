function kebabToCamelCase(inputString) {
  // define variables
  var strLength;
  var posOfDash;
  var startPosition = 0;
  var convertedString = '';
  var breakCounter = 0;
  
  
  //let's go
  strLength = inputString.length;
  while (true){
	breakCounter++;
	if (breakCounter > 100){
	  break
	}
	posOfDash = inputString.indexOf('\-', startPosition)
	if (posOfDash === -1){
	
	  //nothing to convertn anymore - just add remaining string and exit
	  convertedString = convertedString + inputString.substring(startPosition, strLength)
	  console.log(convertedString);
	  return convertedString;
	  break
	}
	else{
	  //second symbol after dash is always letter, so let's just make it uppercase without additional checks
	  convertedString = convertedString + inputString.substring(startPosition, posOfDash) + inputString[posOfDash+1].toUpperCase();
	  startPosition = posOfDash + 2;
	}
  }
}

module.exports = kebabToCamelCase;




