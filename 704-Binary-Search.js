const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let middleIndex = Math.ceil((left + right) / 2);

    if (nums[middleIndex] === target) {
      return middleIndex;
    } else if (nums[middleIndex] < target) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  }

  return -1;
};

// console.log(search(nums, target));

//рекурсивный метод

var search = function (nums, target, left = 0, right = nums.length - 1) {
  let middleIndex = Math.ceil((left + right) / 2);
  if (nums[middleIndex] === target) {
    return middleIndex;
  } else if (nums[middleIndex] < target) {
    return search(nums, target, middleIndex, right);
  }
  return search(nums, target, left, middleIndex);
};

console.log(search(nums, target));
