const sumAll = function(...nums) {
  const isPositiveNums = nums.every(num => num > 0);
  const isIntegerNums = nums.every(num => Number.isInteger(num));
  const isTypeNums = nums.every(num => typeof num === 'number');
  const isValidNums = isPositiveNums && isIntegerNums && isTypeNums;

  if (isValidNums) {
    let startNum = nums.at(0);
    let endNum = nums.at(-1);

    if (startNum > endNum) {
      tempEndNum = startNum;
      startNum = endNum;
      endNum = tempEndNum;
    }

    let sum = 0;
    for (let count = startNum; count <= endNum; count++) {
      sum += count;
    }
    return sum;
  } else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = sumAll;
