//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (time) => {
  const x = time.getTime();
  console.log("🚀 ~ gigasecond ~ x:", x);
  const date = new Date(time);
  console.log(date);
};

gigasecond(12);
