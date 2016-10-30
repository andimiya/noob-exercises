//CoderByte 
//https://coderbyte.com/editor/First%20Reverse:JavaScript

var strArray = [];

function FirstReverse(str) { 
  
  for (var i = str.length-1; i >= 0; i--) {
    strArray.push(str.charAt(i));
  }
  var str = strArray.join("");
  // code goes here  
  return str; 
         
}
   
// keep this function call here 
console.log(FirstReverse('coderbyte'));  