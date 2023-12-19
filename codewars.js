// // Training JS #9: loop statement --while and do..while

function pickIt(arr) {
  var odd = [],
    even = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      odd.push(arr[i]);
    } else {
      even.push(arr[i]);
    }
  }

  return [odd, even];
}
//#10
function grabDoll(dolls) {
  var bag = [];
  //coding here
  for (let i = 0; i < dolls.length; i++) {
    if (bag.length === 3) {
      break;
    } else if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i]);
    } else continue;
  }
  return bag;
}
//11
function giveMeFive(obj) {
  //coding here
  let array = [];
  for (let key in obj) {
    if (key.length === 5) {
      array.push(key);
    }
    if (obj[key].length === 5) {
      array.push(obj[key]);
    }
  }
  return array;
}
//12
function whatNumberIsIt(n) {
  //coding here
  if (isNaN(n)) {
    return "Input number is Number.NaN";
  } else if (n === Number.POSITIVE_INFINITY) {
    return "Input number is Number.POSITIVE_INFINITY";
  } else if (n === Number.NEGATIVE_INFINITY) {
    return "Input number is Number.NEGATIVE_INFINITY";
  } else if (n === Number.MAX_VALUE) {
    return "Input number is Number.MAX_VALUE";
  } else if (n === Number.MIN_VALUE) {
    return "Input number is Number.MIN_VALUE";
  } else if (typeof n === "number") {
    return "Input number is " + n;
  }
}
//Training JS #14: Methods of Number object--toString() and toLocaleString()
function colorOf(r, g, b) {
  //coding here
  return (
    "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0")
  );
}
