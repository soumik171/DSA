// If use extra spaces:

// var compress = function (chars) {
//   let hash = {};
//   let arr = [];
//   let n = chars.length;

//   for (let i = 0; i < n; i++) {
//     hash[chars[i]] = (hash[chars[i]] || 0) + 1;
//   }
//   for (let key in hash) {
//     if (hash[key] <= 1) arr.push(key);
//     else arr.push(key, hash[key]);
//   }
//   return arr;
// };
// console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
// console.log(
//   compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
// );

// If store in that array:

let stringCompression = (string) => {
  let n = string.length;
  let count = 1;
  let starting = 0;

  for (let i = 1; i <= n; i++) {
    if (i < n && string[i] == string[i - 1]) count++;
    else {
      if (count == 1) string[starting++] = string[i - 1];
      else {
        string[starting++] = string[i - 1];
        let str = count.toString();
        for (let ele of str) {
          string[starting++] = ele;
        }
      }
      count = 1;
    }
  }
  return string.slice(0, starting);
};

console.log(stringCompression(["a", "a", "b", "b", "c", "c", "c"]));
console.log(
  stringCompression([
    "a",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
  ])
);
