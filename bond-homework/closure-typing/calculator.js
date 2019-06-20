function calculator(str) {
  // solution for only one type of operator, but several arguments
  if (!str) return;

  if(str.includes("+")) {
    return str.split("+").reduce((res, a) => {return res + 1 * a}, 0);
  } else if(str.includes("-")) {
    return str.split("-").reduce((res, a, i) => {return i ? res - a : a}, 0);
  } else if(str.includes("*")) {
    return str.split("*").reduce((res, a, i) => {return i ? res * a : a}, 0);
  } else if(str.includes("/")) {
    return str.split("/").reduce((res, a, i) => {return i ? res / a : a}, 0);
  }

}
module.exports = calculator;

