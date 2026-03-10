//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  const regex = /[a-z]/g;
  const res = str.toLowerCase().match(regex);
  const set = new Set(res);
  return set.size === 26;
};

isPangram("A1B2C3BBBDDD");
