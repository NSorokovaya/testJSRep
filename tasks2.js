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

function computeClosestToZero(ts) {
  let closest = 0;

  for (let i = 0; i < ts.length; i++) {
    const currentNumber = Math.abs(ts[i]);

    if (closest === 0 || currentNumber < closest) {
      closest = ts[i];
    }
  }

  return closest;
}

console.log(computeClosestToZero(ts));
