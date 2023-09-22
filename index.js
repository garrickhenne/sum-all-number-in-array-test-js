const sumItems = function(array) {
  // Sum all the numbers in the array.

  // Base case.
  if (array.length === 0) {
    return 0;
  }

  // Recursive case
  let sum = 0;
  array.forEach(item => {
    if (Array.isArray(item)) {
      sum += sumItems(item);
    } else {
      sum += item;
    }
  });

  return sum;
};

console.log(sumItems([[1, 2, [[3], 4]], 5, []]));
// [1, 2, 3, 4, 5] => 15
module.exports = sumItems;