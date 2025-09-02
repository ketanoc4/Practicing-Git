const arr = [3, 7, 12, 18, 25, 31, 42, 56, 63, 77];

const ans = arr.filter(function filtering(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ans);
