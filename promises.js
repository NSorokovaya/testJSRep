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


