// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function removeBetween(a, b) {
  let tempStack = new Stack(); 
  let foundA = false; 

  while (!fruits.isEmpty()) {
    tempStack.push(fruits.pop());
  }

  while (!tempStack.isEmpty()) {
    const current = tempStack.pop(); 

    if (current === a) {
      foundA = true; 
      fruits.push(current); 
      continue; 
    }

    if (current === b && foundA) {
      fruits.push(current); 
    }

    if (!foundA) {
      fruits.push(current);
    }
  }
}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween("Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry