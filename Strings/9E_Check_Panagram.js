// let checkIfPangram = (sentence) => {
//   let hash = {};

//   for (let ele of sentence) {
//     hash[ele] = (hash[ele] || 0) + 1;

//     return Object.keys(hash).length == 26;
//   }
// };

let checkIfPangram = (sentence) => {
  let st = new Set(sentence);

  return st.size == 26;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
console.log(checkIfPangram("leetcode"));
