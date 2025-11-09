const sumAll = function(startNum, endNum) {

  const isPositiveNums = [startNum, endNum].every(num => num > 0);
  const isIntegerNums = [startNum, endNum].every(num => Number.isInteger(num));
  const isTypeNums = [startNum, endNum].every(num => typeof num === 'number');
  const isValidNums = isPositiveNums && isIntegerNums && isTypeNums;

  if (isValidNums) {
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
