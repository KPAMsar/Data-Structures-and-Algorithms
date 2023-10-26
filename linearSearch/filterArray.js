const filterArr = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      console.log(Number(i));
      return Number(i);
    }
  }
  console.log(-1);
  return -1;
};

const arrs = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 22, 33, 44, 55, 66, 77, 88, 99,
];
filterArr(arrs, 22);
