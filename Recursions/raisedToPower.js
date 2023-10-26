const power = (base, exponent) => {
  let ans;
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
};
power(2, 5);
