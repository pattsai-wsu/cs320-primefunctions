function primeGen(n) {
  const primesList = [];
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
    k = h + 1;
    while (k <= n - 2) {
      const remain = primesList[k] % primesList[h];
      if (remain === 0) {
        primesList[k] = -3;
      }
      k += 1;
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
console.log(primeGen(45));
