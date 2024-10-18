// Create a function called mixQueue that rearranges the queue so that the first half is interleaved/mixed with the second half
// For example: 1 2 3 4 5 6 becomes 1 4 2 5 4 6
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function mixQueue(queue) {
  // your code here
  const size = queue.size(); 
  const firstHalf = [];
  const secondHalf = [];

  for (let i = 0; i < Math.ceil(size / 2); i++) {
    firstHalf.push(queue.dequeue()); 
  }

  while (queue.size() > 0) {
    secondHalf.push(queue.dequeue()); 
  }

  const mixedQueue = new Queue();
  const maxLength = Math.max(firstHalf.length, secondHalf.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < firstHalf.length) {
      mixedQueue.enqueue(firstHalf[i]);
    }
    if (i < secondHalf.length) {
      mixedQueue.enqueue(secondHalf[i]); 
    }
  }

  while (mixedQueue.size() > 0) {
    queue.enqueue(mixedQueue.dequeue());
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

mixQueue(queue);
console.log(queue.printQueue()); // Output: 1 4 2 5 3 6