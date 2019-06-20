function kebabToCamelCase(str) {
    var char;
    var newString = "";

    for (var i = 0; i < str.length; i++) {
        char = str[i];
        if (char == '-') {
            char = str[i + 1].toUpperCase();
            i++;
        }
        newString = newString + char;
    }
    return newString;

}

module.exports = kebabToCamelCase;