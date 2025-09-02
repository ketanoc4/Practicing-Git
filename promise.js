// Using callbacks
// function myOwnSetTimeout(callback, duration) {
//   setTimeout(callback, duration);
// }

// function display(data) {
//   console.log(data);
// }
// const ans = myOwnSetTimeout(display, 1000);
// console.log(myOwnSetTimeout);

// Using Promises
// Promisifies it

// function promisifiedFunction(duration) {
//   const p = new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve();
//     }, duration);
//   });
//   return p;
// }

// const ans = promisifiedFunction(2000);
// ans.then(function () {
//   console.log("Timeout ended.");
//   console.log(ans);
// });

// let p = new Promise(function (resolve) {
//   resolve();
//   console.log(p);
// });
// console.log(p);

function catchFunc() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Promise is resolved.");
      } else {
        reject("Error in resolving promise!");
      }
    }, 2000);
  });
}

catchFunc()
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
