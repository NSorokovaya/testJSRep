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

// const person = {
//   name: "Arina",
//   age: 24,
//   surname: "AA",
// };

// person.age = 88;

// const persons = [
//   {
//     name: "Arina",
//     lastName: "Labuts",
//     age: 24,
//   },
//   {
//     name: "Nadiia",
//     lastName: "Sorokova",
//     age: 22,
//   },
//   {
//     name: "Iryna",
//     lastName: "Sorokova",
//     age: 48,
//   },
//   {
//     name: "Vlad",
//     lastName: "Shevchuk",
//     age: 28,
//   },
//   {
//     name: "Sasha",
//     lastName: "Labuts",
//     age: 16,
//   },
//   {
//     name: "Seva",
//     lastName: "Labuts",
//     age: 14,
//   },
//   {
//     name: "Masha",
//     lastName: "Lusyuk",
//     age: 24,
//   },
// ];

// function getLastNames() {
//   const lastName = persons
//     .filter((person) => person.age < 25)
//     .map((person) => person.lastName);
//   console.log(new Set(lastName));
// }
// getLastNames();
// getLastNames();

// function getSorokova() {
//   const getSorokova = persons.map((person) =>
//     person.lastName === "Sorokova" ? { name: person.name + "super" } : person
//   );
//   console.log(getSorokova);
// }

// getSorokova();
// let Aryna = "Aryna";
// Aryna = Aryna.concat("super");
// console.log(Aryna);

// function getNumber() {
//   const lastNames = person;
// }

//Вывести фамилии и количество людей с данными фамилиями

// const uniqueLastNames = [];
// persons.forEach((person) => {
//   const { lastName } = person;

//   if (uniqueLastNames[lastName]) {
//     uniqueLastNames[lastName]++;
//   } else {
//     uniqueLastNames[lastName] = 1;
//   }
// });

// console.log(uniqueLastNames);

// const uniqueLastNames = persons
//   .map((person) => person.lastName)
//   .filter((person) => person.lastName === person.lastName);
// console.log(uniqueLastNames);

//Post  localhost:/api/authors - 201 created, 400 - Bad Request, 401,
//delete localhost:/api/authors/:id - 200,404
//put localhost:/api/authors/:id - 200,404
// get localhost:/api/authors - 200, 500
//get localhost:/api/authors/:id -

//update
// function cutIt(arr) {
//   //coding here...
//   let shortest = arr[0].length;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length < shortest) {
//       shortest = arr[i].length;
//     }
//   }
//   const result = arr.map((str) => str.slice(0, shortest));
//   return result;
// }

// const cats = [
//   { name: "Felix", color: "gray" },
//   { name: "Sophia", color: "black" },
//   { name: "Ludvig", color: "white" },
//   { name: "Yakov", color: "red" },
//   { name: "Mickael", color: "black" },
//   { name: "Sara", color: "white" },
// ];

// const redCats = cats.filter((cat) => cat.color === "red");
// console.log(redCats);
// const arrayExample = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 6, 7, 0, 0, 0]; // [1, 2, 3, 4, 5, 6, 7, 0]
// function lalala(arrayExample) {
//   return arrayExample.reduce((acc, item) => {
//     if (acc.includes(item)) {
//       return acc;
//     }

//     return [...acc, item];
//   }, []);
// }
// console.log(lalala(arrayExample));
