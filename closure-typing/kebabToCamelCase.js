function kebabToCamelCase(str) {
  return str.split('').map( (ch, i, arr) => {return ch == '-' ? (arr[i+1] = arr[i+1].toUpperCase(), '') : ch}).join("")
}

module.exports = kebabToCamelCase;
