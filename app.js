// const array = [1, 3, 2, 4];

// const findNumber = function () {
//   const array2 = [...array].sort();
//   for (let i = 0; i < array2.length; i++) {
//     if (array2[i + 1] - array2[i] > 1) {
//       return array2[i] + 1;
//     }
//   }
// };
// console.log(findNumber(array));
// //1,2,... n-2, n-1, n

// const another = function () {
//       const max = Math.max(array)
//       const expectedSum =

// };

const person = {
  name: "Arina",
  age: 24,
  surname: "AA",
};

function aa() {
  let employee = { ...person };
  person.age = 88;
  console.log(employee);
  //name: Arina,
  //age: 88,
  //surname: AA,
}

console.log(aa());
