const repeatString = function(strInput, repeatCount) {
  
  if (repeatCount === 0) {
    return '';
  } else if (repeatCount < 0) {
    return 'ERROR';
  } else {
    let newStr = '';
    for (let i = 0; i < repeatCount; i++) {
      newStr += strInput;
    }
    return newStr;
  }
};

// Do not edit below this line
module.exports = repeatString;
