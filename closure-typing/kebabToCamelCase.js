function kebabToCamelCase(kebabString) {
    // your code here
    var camelString = '';
    for ( var i=0; i < kebabString.length; i++ ){
        camelString += (kebabString[i] == '-') ? kebabString[++i].toUpperCase() : kebabString[i];
    }
    return camelString;
}

module.exports = kebabToCamelCase;