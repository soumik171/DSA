let generateParenthesis = (n) => {
  let res = [];

  let recur = (open, close, str) => {
    if (open == 0 && close == 0) res.push(str);
    if (open != 0) recur(open - 1, close, str + "(");
    if (close > open) recur(open, close - 1, str + ")");
  };

  recur(n, n, "");

  return res;
};
console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
