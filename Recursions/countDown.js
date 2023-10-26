function runNum(num) {
  if (num < 1) {
    return console.log("Done");
  }
  console.log(num);
  num--;
  runNum(num);
}
runNum(5);
