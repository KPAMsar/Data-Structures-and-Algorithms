function getOddNumbers(arr) {
  let newArr = [];
  if (arr.length === 0) return;
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);
  newArr = newArr.concat(getOddNumbers(arr.splice(1)));
  return newArr;
}

const i = [
  1, 11, 9, 19, 29, 2, 3, 4, 5, 56, 6, 7, 8, 81, 22, 33, 44, 55, 66, 7, 8,
];

getOddNumbers(i);
