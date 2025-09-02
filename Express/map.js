const arr = [1, 2, 3, 4, 5];
//using Map method of Array
const ans = arr.map((a) => {
  return a * 2;
});
console.log(ans);

const arr2 = [5, 6,7,8, 9];
const newArr = [];
for (let i = 0; i < arr2.length; i++) {
  newArr.push(arr2[i] * 2);
}
console.log(newArr);
