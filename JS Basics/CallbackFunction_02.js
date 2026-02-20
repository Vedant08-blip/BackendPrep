//A callback is a function passed into another function that runs later.
//Example of a callback function:

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Vedant", sayBye);

/* OUTPUT:

Hello Vedant
Bye!

Problems in callback functions:

1. Callback Hell: When you have multiple nested callbacks, it can lead to code that is difficult to read and maintain. This is often referred to as "callback hell" or "pyramid of doom."

2. Error Handling: In a callback-based approach, error handling can become complex. If an error occurs in one of the callbacks, it may not be properly propagated, making it harder to debug.

3. Inversion of Control: When using callbacks, you are giving control to the function that calls the callback. This can lead to situations where you have less control over the flow of your program.

Solutions to these problems include using Promises or async/await, which provide a more structured way to handle asynchronous operations and can help avoid callback hell and improve error handling.
*/