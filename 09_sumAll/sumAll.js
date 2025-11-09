const sumAll = function(startNum, endNum) {

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
};

// Do not edit below this line
module.exports = sumAll;
