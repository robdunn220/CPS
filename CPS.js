// ----------------------------------------------
// Exercise 1
// function times2(arr, callback) {
//   var result = arr.map(function(num) {
//     return num * 2;
//   });
//   callback(result);
// }
// function sumArray(arr) {
//   var result = arr.reduce(function(a, b) {
//     return a + b;
//   });
//   console.log(result);
// }
//
// var array = [1, 8, 2, 5];
// times2(array, sumArray);

// ----------------------------------------------
//Exercise 2
// function maxCPS(arr, callback) {
//   var result = arr.reduce(function(a, b) {
//     return a > b ? a : b;
//   });
  // setTimeout(function() {
  //   callback(result);
  // }, 1000);
// }
//
// var array = [1, 8, 2, 5, 27];
// maxCPS(array, function(arr) {
//   console.log(arr);
// });


// ----------------------------------------------
// Exercise 3
// function square(num, callback) {
//   callback(num * num);
// }
//
// var squared = square(5, function(num) {
//   console.log(num);
// });

// ----------------------------------------------
// Exercise 4
function square(num, callback) {
  callback(num * num);
}

function squareRoot(num, callback) {
  callback(Math.sqrt(num));
}

var squareRt = square(5, function(num) {
  squareRoot(num, function(sqrt) {
    console.log(sqrt);
  });
});

var squarexx = 0;
var squareyy = 0;

var squarex = square(43, function(num){
  squarexx = num;
});
var squarey = square(13, function(num){
  squareyy = num;
});

var sum = squarexx + squareyy;

var answer = squareRoot(sum, function(num) {
  console.log('The answer is: ' + num);
});
