// Name: Patrick Tsai
// Student ID: 011709316
// CS320 Homework 4 due Nov. 2, 2020

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

function maxPrimeSum(n) {
  let flag = 0;
  let counter = 1;
  let i = 0;
  let q = 0;
  let numListSum = 0;
  const maxPrimeSumArr = [];
  const maxPrimeNumList = primeGen(n);
  const primeGenArrLen = maxPrimeNumList.length;
  let primeTargetNum = maxPrimeNumList[q];

  numListSum += maxPrimeNumList[i];

  while (q < primeGenArrLen) {
    while (numListSum !== primeTargetNum) {
      if (numListSum > primeTargetNum) {
        flag += 1;
        if (flag === q) {
          break;
        }
        counter = 0;
        i = flag - 1;
        numListSum = 0;
      }
      i += 1;
      counter += 1;
      numListSum += maxPrimeNumList[i];
    }
    if (flag === 0 || flag !== q) {
      maxPrimeSumArr[q] = [primeTargetNum, counter];
    } else {
      maxPrimeSumArr[q] = [primeTargetNum, 1];
    }
    counter = 1;
    flag = 0;
    q += 1;
    primeTargetNum = maxPrimeNumList[q];
    i = 0;
    numListSum = 0;
    numListSum += maxPrimeNumList[i];
  }

  // altered sort function found on stack overflow
  // https://stackoverflow.com/questions/16096872/how-to-sort-2-dimensional-array-by-column-value
  function compare(current, next) {
    if (current[1] === next[1]) {
      return 0;
    }
    return (current[1] < next[1]) ? -1 : 1;
  }

  const sortedArr = maxPrimeSumArr.sort(compare);
  return (sortedArr[maxPrimeNumList.length - 1]);
  // return (sortedArr);
}

// console.log(primeGen(10));
// console.log(cumulativeSum([1, 2, 3, 4]));
// console.log(cumulativeSum(primeGen(10)));
// console.log(maxPrimeSum(100));
// console.log(maxPrimeSum(100000));
