function calculator(str) {
  // solution for only one type of operator, but several arguments
  if (!str) return;
  let result = (str.includes("+")) ? str.split("+").reduce((res, a)    => res + 1 * a, 0) :
               (str.includes("-")) ? str.split("-").reduce((res, a, i) => i ? res - a : a, 0) :
               (str.includes("*")) ? str.split("*").reduce((res, a, i) => i ? res * a : a, 0) :
               (str.includes("/")) ? str.split("/").reduce((res, a, i) => i && a !== 0 ? res / a : a, 0) : 0;
  return result;
}

module.exports = calculator;

