var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") stack.push(")");
    else if (s[i] == "{") stack.push("}");
    else if (s[i] == "[") stack.push("]");
    else {
      // if(s[i]==stack.length-1) stack.pop();
      if (s[i] == stack.pop()) continue;
      else return false;
    }
  }
  // return stack.length==0;
  return true;
};

console.log(isValid("()"));
console.log(isValid("(){}[]"));
console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid("([)]"));
