// Given any string, find the number of characters of the same letter. The Sequence of the output of counts should be in order in which the letters come in the word. Ignore whitespaces. Also, focus on optimizing code as much as possible.

// Example 1: Amolya Sharma
// The expected answer would be:
// A-4
// M-2
// O-1
// L-1
// Y-1
// S-1
// H-1
// R-1

const findStringCount = (str) => {
  let exists = {};
  
  let filter = str
    .split("")
    .filter((letter) => letter != " ")
    .join("");

  let strU = filter.toUpperCase();

  for (let i = 0; i < strU.length; i++) {
    if (strU[i] === "") {
      exists[strU[i]] = null;
    }
    if (exists[strU[i]]) {
      exists[strU[i]] += 1;
    } else {
      exists[strU[i]] = 1;
    }
  }

  for (let key in exists) {
    console.log(`${key}-${exists[key]}`);
  }
};

console.log(findStringCount("Amolya Sharma"));
