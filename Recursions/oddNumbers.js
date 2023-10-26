function getOddNumber(num) {
  let odd_numbers = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      odd_numbers.push(helperInput[0]);
    }
    helper(helperInput.slice(0));
  }
  helper(num);
  return odd_numbers;
}

const i = [
  1, 11, 9, 19, 29, 2, 3, 4, 5, 56, 6, 7, 8, 81, 22, 33, 44, 55, 66, 7, 8,
];
getOddNumber(i);
