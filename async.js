// This is Revision of week 1 (Async, Promise, callbacks, await, etc)

// function squares(n) {
//   return n * n;
// }

// function cube(n) {
//   return n * n * n;
// }

// //Example of callback function
// function sumOfSomething(a, b, cb) {
//   let square1 = cb(a);
//   let square2 = cb(b);
//   return square1 + square2;
// }

// let ans = sumOfSomething(2, 1, cube);
// console.log(ans);

const fs = require("fs");

fs.readFile("sample.txt", "utf-8", function (err, data) {
    if (err) {
        console.log(err) ;
    }
    console.log(data);
});

console.log("Hi there!");
