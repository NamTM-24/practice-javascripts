const array = [2, 1, 6, 3];
const callback = (x, y) => {
  console.log("day la x", x);
  console.log("day la y", y);
  return x + y;
};

// 0 + 1 + 2 + 3 + 4
const initialValue = 1;
const sumWithInitial = array.reduce(callback, initialValue);

console.log(sumWithInitial);
// Expected output: 10
