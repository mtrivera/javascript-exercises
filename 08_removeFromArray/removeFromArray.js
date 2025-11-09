const removeFromArray = function(arr, ...itemsToRemove) {
  return arr.filter(val => !itemsToRemove.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
