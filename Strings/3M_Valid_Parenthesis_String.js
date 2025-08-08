var checkValidString = function (s) {
  // Conisder a range within min and max
  let min = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      min++;
      max++;
    } else if (s[i] == ")") {
      min--;
      max--;
    } else {
      min--;
      max++;
    }

    if (min < 0) min = 0;

    if (max < 0) return false; // for edge case like: ")" , only closing parenthesis
  }
  return min == 0;
};

console.log(checkValidString("()"));
console.log(checkValidString("(*)"));
console.log(checkValidString("(*))"));
console.log(checkValidString(")"));
console.log(checkValidString(")("));
