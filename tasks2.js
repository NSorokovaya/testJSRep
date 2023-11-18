// let gdanskPeople = [
//   {
//     id: 1,
//     name: "Arina",
//     age: 24,
//   },
//   {
//     id: 2,
//     name: "Nadiia",
//     age: 22,
//   },
//   {
//     id: 3,
//     name: "Vald",
//     age: 28,
//   },
//   {
//     id: 4,
//     name: "Jenia",
//     age: 25,
//   },
//   {
//     id: 5,
//     name: "Misik",
//     age: 28,
//   },
// ];
// let pets = {
//   1: {
//     name: "Derry",
//     type: "dog",
//   },
//   4: {
//     name: "Debil",
//     type: "cat",
//   },
//   5: {
//     name: "Nuts",
//     type: "dog",
//   },
//   71: {
//     name: "Nastya",
//     type: "snake",
//   },
// };

// //task1
// const keys = Object.keys(pets); // n
// let size = 0;
// for (const key of keys) {
//   for (const peopleID of gdanskPeople) {
//     if (key == peopleID.id) {
//       // console.log(key);
//       size++;
//     }
//   }
// }

// const result = gdanskPeople.map((p) => p.id).filter((id) => pets[id]).length;

// console.log(result);

// //task2

// for (person of gdanskPeople) {
//   const petD = pets[person.id];
//   if (!petD) {
//     console.log(person.name, "No pets");
//   } else console.log(person.name, petD.name);
// }

// let r = gdanskPeople.map((p) => {
//   return {
//     personName: p.name,
//     petName: pets[p.id] ? pets[p.id].name : "No pets",
//   };
// });

// //task3
// const oldPeopleSum = gdanskPeople
//   .filter((person) => person.age > 24)
//   .map((p) => p.age)
//   .reduce((previousValue, age) => {
//     return previousValue + age;
//   }, 0);
// console.log(oldPeopleSum);

const ts = [-5, 5, -29, 950, 2, -4];
function positiveSum(ts) {
  let sum = 0;
  for (const number of ts) {
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
}
// console.log(positiveSum(ts));
console.log(100 % 200);

// function computeClosestToZero(ts) {
//   let closest = 0;
//   for (let i = 0; i < ts.length; i++) {
//     if (closest === 0) {
//       closest = ts[i];
//     } else if (ts[i] > 0 && ts[i] <= closest) {
//       closest = ts[i];
//     } else if (ts[i] < 0 && -ts[i] < closest) {
//       closest = ts[i];
//     }
//   }
//   return closest;
// }

// function computeClosestToZero(ts) {
//   let closest = 0;

//   for (let i = 0; i < ts.length; i++) {
//     const currentNumber = Math.abs(ts[i]);

//     if (closest === 0 || currentNumber < closest) {
//       closest = ts[i];
//     }
//   }

//   return closest;
// }

// function computeClosestToZero(ts) {
//   let closest = 0;

//   for (const number of ts) {
//     const currentNumber = Math.abs(number);

//     if (closest === 0 || currentNumber < closest) {
//       closest = number;
//     }
//   }

//   return closest;
// }

// function computeClosestToZero(ts) {
//   let closest = ts[0];

//   for (const number of ts) {
//     const currentNumber = Math.abs(number);

//     if (currentNumber < closest) {
//       closest = number;
//     }
//   }

//   return closest;
// }

// console.log(computeClosestToZero(ts));

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   //console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }

// api / authors - get  200
// api / authors - post 201
// api / authors /:id  get 200
// api / authors /: id - put 200
// api / authors /: id - patch 200
// api / authors /: id - delete 204

// api / authors /: id / books
// модификаторы доступа
// сокрытие деталей реализации - инкапсуляция

// сабклассы взаимозаменямы
// console.log(typeof undefined);
// const value1 = "5";
// const value2 = 9;
// let sum = value1 - value2;
// console.log(sum);

function saleHotdogs(n) {
  return n >= 5 ? 95 : n >= 10 ? 90 : 100;
}
