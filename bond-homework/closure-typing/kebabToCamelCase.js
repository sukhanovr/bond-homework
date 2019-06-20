function kebabToCamelCase(str) {
    const delimiters = "- _";
    return str.split("").reduce(
        (result, item) => {
            if (result.length && delimiters.includes(result[result.length - 1])) {
                result[result.length - 1] = item.toUpperCase();
            } else {
                result.push(item);
            }
            return result;
        }, []).filter((i) => !delimiters.includes(i)).join("");
}

module.exports = kebabToCamelCase;