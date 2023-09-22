const sumItems = function(array) {
  if (!Array.isArray(array)) throw new Error('Input must be an array.');

  return array.reduce((sum, item) => {
    // Check if item is array, if so we should call sumItems on that first.
    if (Array.isArray(item)) {
      return sum + sumItems(item);
    } else if (isNaN(item)) {
      throw new Error('All elements in the array must be numbers or arrays of numbers.');
    } else {
      // Add item to the sum.
      return sum + item;
    }
  }, 0);
};

console.log(sumItems([[1, 2, [[3], 4]], 5, []]));
// [1, 2, 3, 4, 5] => 15
module.exports = sumItems;