var bagOfTokensScore = function (tokens, power) {
  tokens = new Int32Array(tokens).sort();

  let left = 0;
  let right = tokens.length - 1;

  let score = 0;
  let maxScore = 0;

  while (left <= right) {
    if (power >= tokens[left]) {
      power -= tokens[left];
      score++;
      maxScore = Math.max(maxScore, score);
      left++;
    } else if (score >= 1) {
      power += tokens[right];
      score--;
      maxScore = Math.max(maxScore, score);
      right--;
    } else break;
  }
  return maxScore;
};

console.log(bagOfTokensScore([100, 200, 300, 400], 200));
console.log(bagOfTokensScore([200, 100], 150));
console.log(bagOfTokensScore([100], 50));
console.log(bagOfTokensScore([100, 200, 500, 300, 400], 200));
