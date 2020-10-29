// Name: Patrick Tsai
// CS320 Homework 4 due Nov. 2, 2020

function primeGen(n) {
  const primesList = [];
  if (n < 2) {
    return (primesList);
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
  // altereed a splice function found on stackOverflow
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

function cumulativeSum(numList) {
  let i = 1;
  let sum = 0;
  while (i < numList.length) {
    sum = numList[i - 1] + numList[i];
    numList[i] = sum;
    i += 1;
  }
  const last = numList.length - 1;
  return (numList[last]);
}

function maxPrimeSum(n) {
  const maxPrimeSumArr = [];
  const maxPrimeNumList = primeGen(n);
  const primeGenArrLen = maxPrimeNumList.length;
  const primeTargetNum = maxPrimeNumList[primeGenArrLen - 1];

  //console.log(`prime Target Num: ${primeTargetNum}`);
  let flag = 0;
  let i = 0;
  let numListSum = 0;
  numListSum += maxPrimeNumList[i];
  let counter = 1;
  //console.log(`numListSum value : ${numListSum}`);
  while (numListSum !== primeTargetNum) {
    if (numListSum > primeTargetNum) {
      counter = 1;
      numListSum = 0;
      flag += 1;
      if (flag === primeGenArrLen - 1) {
        //console.log('no consecutive list of equl to prime number');
        return ([maxPrimeNumList[flag], 1]);
      }
      //console.log(`flag : ${flag}`);
      i = flag;
      numListSum += maxPrimeNumList[i];
      //console.log(`numListSum value : ${numListSum}`);
    }
    i += 1;
    counter += 1;
    numListSum += maxPrimeNumList[i];
    //console.log(`numListSum value : ${numListSum}`);
  }
  maxPrimeSumArr[0] = primeTargetNum;
  maxPrimeSumArr[1] = counter;

  return (maxPrimeSumArr);
}

console.log(primeGen(50));
console.log(cumulativeSum(primeGen(50)));
console.log(maxPrimeSum(100));
