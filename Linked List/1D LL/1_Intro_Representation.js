// In ps, we are given an array & also return the ans in array. So, we have to convert that array in a linked list at first then after converting, we have to convert that in to array

// In the problem solving IDE, we just need to only write the function, no declaration of node, convert to ll, then to array again

// Declaring a node:

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

let n1 = new Node(5);
let n2 = new Node(5, 15);
console.log(n1, n2);

// convert it to array:
