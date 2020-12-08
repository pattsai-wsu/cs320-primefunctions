// Name: Patrick Tsai
// Student ID: 011709316
// CS320 Homework 5 due Dec. 9, 2020

function primeGen(n) {
  const primesList = [];
  if (n < 2) {
    console.log('there are no prime numbers less than 2 - return empty array');
    return ([]);
  }
  let j = 1;
  let y = 2;
  primesList[0] = y;
  while (j < n - 1) {
    y += 1;
    primesList[j] = y;
    j += 1;
  }
  let h = 0;
  let k = 0;
  const z = n / 2;
  while (h < z) {
    while (primesList[h] === -3) {
      h += 1;
    }
    k = h + 1;
    while (primesList[k] === -3) {
      k += 1;
    }
    while (k <= n - 2) {
      const remain = primesList[k] % primesList[h];
      if (remain === 0) {
        primesList[k] = -3;
      }
      k += 1;
      while (primesList[k] === -3) {
        k += 1;
      }
    }
    k = 0;
    h += 1;
  }
  let i = 0;
  // altered a splice function found on stackOverflow
  // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
  while (i < primesList.length) {
    if (primesList[i] === -3) {
      primesList.splice(i, 1);
    } else {
      i += 1;
    }
  }
  return (primesList);
}

// eslint-disable-next-line no-unused-vars
function cumulativeSum(numListIn) {
  const numList = numListIn;
  if (numList.length < 1) {
    return ('there are no prime numbers less than 2');
  }
  let i = 1;
  let sum = 0;
  while (i < numList.length) {
    sum = numList[i - 1] + numList[i];
    numList[i] = sum;
    i += 1;
  }
  // const last = numList.length - 1;
  return (numList);
}

// eslint-disable-next-line no-unused-vars
function maxPrimeSum(n) {
  let flag = 1;
  let counter = 1;
  let i = 0;
  let q = 0;
  let numListSum = 0;
  const maxPrimeSumArr = [];
  const maxPrimeNumList = primeGen(n);
  const primeGenArrLen = maxPrimeNumList.length;
  let primeTargetNum = maxPrimeNumList[q];
  let maxCounter = 1;
  let maxQ = 0;

  numListSum += maxPrimeNumList[i];

  while (q < primeGenArrLen) {
    while (numListSum !== primeTargetNum) {
      if (numListSum > primeTargetNum) {
        flag += 1;
        if (flag > (q / (flag * flag))) {
          // changed this statement to stop the checking for consecutive
          // sums at a certain index, so it won't run till the index
          // reaches the target value I'm looking for. it didn't help
          // much
          flag = q;
          break;
        }
        counter = 1;
        i = flag;
        numListSum = maxPrimeNumList[i];
      }
      i += 2;
      counter += 2;
      numListSum = numListSum + maxPrimeNumList[i - 1] + maxPrimeNumList[i];
    }
    if (flag === 0 || flag !== q) {
      if (counter > maxCounter) {
        maxCounter = counter;
        maxQ = q;
      }
      maxPrimeSumArr[q] = [primeTargetNum, counter];
    } else {
      maxPrimeSumArr[q] = [primeTargetNum, 1];
    }
    counter = 2;
    flag = 1;
    q += 1;
    primeTargetNum = maxPrimeNumList[q];
    i = 1;
    numListSum = 5;

    // instead of using a summation I use some base values for the sum
    // at the beginning of the loop, I thought it would reduce the number
    // of querries to the ith index at the beginning
  }
  // took out the section that sorts the array and returns the element with the
  // largest consecutive numbers added
  // instead I keep track of that index of the element with the largest
  // consecutive sum

  return (maxPrimeSumArr[maxQ]);
}
// console.log(maxPrimeSum(100000));
