function kebabToCamelCase(inputStr) {
    let resString = '';

    if (inputStr) {
        let matches = inputStr.split('-');

        matches.map((element, index) => {

            if (index > 0) {
                element = element.charAt(0).toUpperCase() + element.slice(1);
            }
            resString += element;
        });
    } else {
        new Error('incorrect input param');
    }
    return resString;
}

module.exports = kebabToCamelCase;