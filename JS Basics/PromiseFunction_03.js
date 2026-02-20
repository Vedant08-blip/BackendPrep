/* 
A Promise represents a value that may be available now, later, or never.

It has 3 states:
	•	Pending
	•	Resolved
	•	Rejected

*/
// Example of a Promise:

let myPromise = new Promise(function(resolve, reject) {
  let success = true; // Simulating a successful operation
  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});

myPromise.then(function(result) {
  console.log(result); // Output: Operation was successful!
}).catch(function(error) {
  console.log(error);
});

/* OUTPUT:

Operation was successful!

Advantages of Promises:
1. Avoiding Callback Hell: Promises help to avoid deeply nested callbacks, making the code more readable and maintainable.
2. Better Error Handling: Promises provide a more structured way to handle errors using .catch(), which can catch errors from any part of the promise chain.
3. Composability: Promises can be chained together, allowing for more complex asynchronous operations to be handled in a cleaner way.

Overall, Promises provide a more elegant and efficient way to handle asynchronous operations in JavaScript compared to traditional callback functions. */