/**
 * Напиши фунцию delay, которая работает как setTimeout, только с API промисов
 */

// const delay = "your code here :3";

// // должно работать так
// delay(1000)
//   .then(() => {
//     console.log("One second just passed, sheesh!");
//   })
//   .catch(() => {
//     console.log("better not get here..");
//   })
//   .finally(() => {
//     console.log("I'll alwayse be called in the end");
//   });

//решение
const delay = (ms) => {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
};

console.log("zero seconds passed");
delay(1000).then(() => {
  console.log("one second passed");
});

// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// };

// const run = async () => {
//   // Please create a function `delay` that takes a number `ms` (milliseconds) as an argument
//   // and makes the program wait for the specified `ms` delay before continuing.

//   // Example:
//   // The following log should appear immediately.
//   console.log("I show up immediately");

//   // This will call the `delay` function with 1000ms (1 second) and wait for it to complete.
//   await delay(1000);

//   // The following log should appear after a delay of 1000ms (1 second).
//   console.log("I show up after 1000ms");
// };

// run();
