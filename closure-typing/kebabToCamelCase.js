function kebabToCamelCase(b) {
    let initialArray = b.split("-");
    let newArray = [];

    //I am convinced that it is possible to skip the change of letter case for the first element of the array at the same time saving it.
    for (let i=0; i < initialArray.length; i++){
        newArray.push(initialArray[i].charAt(0).toUpperCase()+initialArray[i].slice(1));
    }

    let newVar = newArray.join('');
    let secondVar = lwFirstLetter(newVar);

    //Terrible! In the future, I need to abandon this
    function lwFirstLetter(z) {
        return z.charAt(0).toLowerCase() + z.slice(1);
    }

    return secondVar;

}

module.exports = kebabToCamelCase;