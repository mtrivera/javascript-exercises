const sumAll = function(startNum, endNum) {

  const isPositiveNums = [startNum, endNum].every(num => num > 0);

  if (isPositiveNums) {
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
