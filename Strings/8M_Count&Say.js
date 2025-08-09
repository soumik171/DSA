// Approch-1:
// var countAndSay = function (n) {
//   if (n == 1) return "1";

//   let prevElement = countAndSay(n - 1);

//   let cnt = 0;
//   let res = [];

//   for (let i = 0; i < prevElement.length; i++) {
//     cnt++;

//     if (i == prevElement.length - 1 || prevElement[i] != prevElement[i + 1]) {
//       res.push(cnt);
//       res.push(prevElement[i]);
//       cnt = 0;
//     }
//   }
//   return res.join("");
// };

// Approch-2:
let countAndSay = (n) => {
  if (n == 1) return "1";

  let prev = countAndSay(n - 1);

  let res = [];
  let cnt = 1;

  for (let i = 1; i <= prev.length; i++) {
    // if start with i=1, then we have to traverse towards to prev.length for calculating the last iteration
    if (prev[i] == prev[i - 1]) cnt++;
    else {
      //   res += cnt + prev[i - 1]; // it takes longer time cz, as string is immutable in js, so inside loop, everytime when we use result, it creates res everytime, that consumes memeory space
      res.push(cnt, prev[i - 1]);
      cnt = 1;
    }
  }
  //   return res;
  return res.join("");
};
console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));
