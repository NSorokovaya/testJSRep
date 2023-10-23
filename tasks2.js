let gdanskPeople = [
  {
    id: 1,
    name: "Arina",
    age: 24,
  },
  {
    id: 2,
    name: "Nadiia",
    age: 22,
  },
  {
    id: 3,
    name: "Vald",
    age: 28,
  },
  {
    id: 4,
    name: "Jenia",
    age: 25,
  },
  {
    id: 5,
    name: "Misik",
    age: 28,
  },
];
let pets = {
  1: {
    name: "Derry",
    type: "dog",
  },
  4: {
    name: "Debil",
    type: "cat",
  },
  5: {
    name: "Nuts",
    type: "dog",
  },
  71: {
    name: "Nastya",
    type: "snake",
  },
};

//task1
const keys = Object.keys(pets); // n
let size = 0;
for (const key of keys) {
  for (const peopleID of gdanskPeople) {
    if (key == peopleID.id) {
      // console.log(key);
      size++;
    }
  }
}

const result = gdanskPeople.map((p) => p.id).filter((id) => pets[id]).length;

console.log(result);
