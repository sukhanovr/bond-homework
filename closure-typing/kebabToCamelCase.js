function kebabToCamelCase(inputStr) {
    var posOfHyphen, pos = 0;
    var result = "";
    if(inputStr){
        if(~inputStr.indexOf("-", pos)) {
            while (true) {
                posOfHyphen = inputStr.indexOf("-", pos);
                if(posOfHyphen === -1) {
                    result+= inputStr.substring(pos);
                    break;
                }
                result += inputStr.substring(pos, posOfHyphen);
                result += inputStr[posOfHyphen+1].toUpperCase();
                pos = posOfHyphen+2;
            }
            return result;
        } else {
            return inputStr;
        }
    }
}

module.exports = kebabToCamelCase;