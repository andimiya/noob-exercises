
// DO NOT POLLUTE THE GLOBAL SCOPE

//create a child scope

function random () {
  var x = 10;
  var y = 20;
  console.log(x + y);
}

//global is out here, how do we use x from out here?

// iife = immediate invoked function expression

(function random () {
  var x = 10;
  var y = 20;
  console.log(x + y);

  function innerScope() {
    x = 100;
  }

  console.log(x);

}) ();


Math.floor(2.324897);

//--------------------


// DO NOT POLLUTE THE GLOBAL SCOPE

//create a child scope

//global is out here, how do we use x from out here?

// iife = immediate invoked function expression

(function random () {
  var y = 20;
  console.log(x + y);

  var x = 10;
  function innerScope() {
    console.log("one", x);  // x is undefined because var x; is hoisted within this function
    //var x;
    var x = 100;
    console.log("two", x);  // x is 100
  }


  innerScope();

  console.log(x);

}) ();



