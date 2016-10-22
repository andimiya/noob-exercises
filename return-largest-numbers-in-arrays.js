
//Free Code Camp - Return the largest numbers in arrays
//https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays
// http://jsbin.com/bunuyek/edit?js,console

var largestNumbers = [];

function largestOfFour(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].sort(function(a, b) {
    return a - b;
    });
    largestNumbers.push(arr[i][3]);
  }
console.log(largestNumbers);
};   

largestOfFour([
  [4, 5, 1, 3], 
  [13, 27, 18, 26], 
  [32, 35, 37, 39], 
  [1000, 1001, 857, 1]
]);



//NOTES:
//   loop through array 1
//   loop through array 2
//   loop through array 3
//   each time...
//    sort each array
//    return array.length postion each time
