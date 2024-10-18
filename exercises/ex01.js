// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require('../lib/Stack')

function calcDistance(a, b) {
  // your code here
  let tempStack = new Stack(); 
  let foundA = false;
  let foundB = false;
  let distance = 0;

 
  while (!students.isEmpty()) {
    const current = students.pop();
    if (current === a) {
      foundA = true; 
    } else if (current === b) {
      foundB = true; 
    }

    if (foundA) {
      distance++;
    }
    tempStack.push(current);
  }
  while (!tempStack.isEmpty()) {
    students.push(tempStack.pop());
  }

  return distance ;
 
}

  

const students = new Stack()
students.push("John")
students.push("Joe")
students.push("Jane")
students.push("Jill")
students.push("Jim")

const distance = calcDistance("Joe", "Jim")
console.log(distance) // 3
const distance2 = calcDistance("Joe", "Jill")
console.log(distance2) // 2
