function kebabToCamelCase(str) {
    return str.split("").reduce(
        (result, a, i, arr) => {
            if (result.length && "-" === result[result.length - 1]) {
                result[result.length - 1] = arr[i].toUpperCase();
            } else {
                result.push(arr[i]);
            }
            return result;
        }, []).join("");
}

module.exports = kebabToCamelCase;