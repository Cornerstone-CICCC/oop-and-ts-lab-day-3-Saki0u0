// Create a function called insertAfterTarget that inserts a new element after a target element
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function insertAfterTarget(target, newElement) {
  // your code here
  const tempStack = new Stack(); 
  let foundTarget = false;

  while (!stack.isEmpty()) {
    const current = stack.pop(); 

    if (current === target) {
      tempStack.push(current); 
      tempStack.push(newElement); 
      foundTarget = true; 
    } else {
      tempStack.push(current);
    }
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }

  if (!foundTarget) {
    console.log("Target not found.");
  }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

insertAfterTarget("B", "X");
console.log(stack.printStack()); // A B X C D