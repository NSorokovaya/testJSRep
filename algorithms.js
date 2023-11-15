//БИНАРНЫЙ ПОИСК

let array = [6, 85, 84, 93, 3, 73, 34, 47, 23];

let search = function (nums, target) {
  let left = 0;
  let mid;
  let right = array.length - 1;
  while (left <= right) {
    mid = Math.round((right - left) / 2) + left;
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(search(array, 34));

//СОРТИРОВКА ПУЗЫРЬКОМ
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Меняем значения переменных
      }
    }
  }
  return array;
};
console.log(bubbleSort(array));

//ЧИСЛА ФИБОНАЧЧИ
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 и так далее.
const fibonachi = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonachi(n - 1) + fibonachi(n - 2);
};

console.log(fibonachi(8));
