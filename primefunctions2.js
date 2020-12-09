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

function cumulativeSum(numListIn) {
  this.numList = numListIn;
  if (this.numList.length < 1) {
    return ('there are no prime numbers less than 2');
  }
  let i = 1;
  let sum = 0;
  while (i < this.numList.length) {
    sum = this.numList[i - 1] + this.numList[i];
    this.numList[i] = sum;
    i += 1;
  }
  // const last = numList.length - 1;
  return (this.numList);
}

// eslint-disable-next-line no-unused-vars
function maxPrimeSum(n) {
  this.array1 = primeGen(n);
  this.array1Change = this.array1.slice();
  const arr1LastIndex = this.array1.length - 1;
  this.array2 = cumulativeSum(this.array1.slice());
  this.keeper = [];
  this.keeper[0] = [this.array1[arr1LastIndex], 1];
  const targetNum = this.array1[arr1LastIndex];
  let targetConstraint = targetNum;
  let hOffset = 0;

  let i = 1;
  let h;
  while (this.array2[0] < targetConstraint) {
    if (this.array2[i] > targetNum) {
      this.array1Change.shift();
      this.array2 = cumulativeSum(this.array1Change.slice());
      i = 0;
      hOffset = 0;
      if ((this.array2[i] % 2) === 0) {
        i++;
      }
    }
    h = hOffset;
    while (h <= arr1LastIndex) {
      if (this.array2[i] === this.array1[h]) {
        if ((i + 1) > this.keeper[0][1]) {
          this.keeper[0] = [this.array2[i], i + 1];
          targetConstraint = targetNum / (i + 1);
        }
        hOffset = i + 1;
        break;
      }
      h += 1;
      if (this.array1[h] > this.array2[i]) {
        break;
      }
    }
    i += 2;
  }

  return (this.keeper[0]);
}

/*
I have changed just about everything from my first NON-Optimized code
My first optimization was about as good, if not a little better, than this code
However, I like this code because it's a little more straight forward
Both are anywhere from .5 to 2 seconds faster than the original code,
I'm not sure why, but sometimes it's much faster, and when I rerun the code
it slower.

Changes from HW4:
1. HW 4 I used a large array to keep track of every [prime_value, consecutive_sum]
   This code, I use an array but only have one entry for the largest [value, consec]
   and then I replace if a larger one occurs
2. In HW5 maxPrimeSum code I use the cummulativeSum function, I did not in HW4
3. HW5 I only check odd values from the cummulativeSum array, against the array from primeGen
   HW4 I checked every value
4. HW5 code, I only check numbers in my cummulativeSum array that are smaller than the
   largest prime number in my primeGen array
5. HW5, I use an offset to not check primeGen values I've already checked.

Honestly, I thought these improvements would be much faster. I feel like 10,000 and below
my code is fast, but when I go for 100,000 it feels sluggish.
 */
