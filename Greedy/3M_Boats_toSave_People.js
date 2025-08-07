var numRescueBoats = function (people, limit) {
  people = new Int32Array(people).sort();

  let left = 0;
  let right = people.length - 1;

  let count = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      count++;
      left++;
      right--;
    } else if (people[left] + people[right] > limit) {
      count++;
      right--;
    }
  }
  return count;
};

console.log(numRescueBoats([1, 2], 3));
console.log(numRescueBoats([3, 1, 2, 2], 3));
console.log(numRescueBoats([3, 5, 3, 4], 5));
console.log(numRescueBoats([1, 4, 6, 9], 10));
console.log(numRescueBoats([2, 4, 6, 9], 10));
