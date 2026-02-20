/*This is built on top of Promises.

It makes async code look like normal synchronous code.*/

// Example of async/await:

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data); // Output: Data fetched successfully!
  } catch (error) {
    console.error(error);
  }
}

getData();

/* OUTPUT:

Data fetched successfully!

Advantages of async/await:
1. Improved Readability: Async/await allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and understand.
2. Better Error Handling: With async/await, you can use try/catch blocks to handle errors more effectively, similar to how you would handle errors in synchronous code.
3. Sequential Execution: Async/await makes it easier to execute asynchronous operations in a sequential manner, which can be more intuitive than chaining promises.

Overall, async/await provides a more elegant and efficient way to handle asynchronous operations in JavaScript compared to traditional callback functions and promises. */
