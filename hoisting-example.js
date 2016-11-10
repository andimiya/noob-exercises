

//what you may write
var y = 12;
function jump() {
  y += 12;
}
y = '10';
jump();
var jump = function () {
  y += 50;
};
jump();

//what js sees
function jump() {
  y += 12;
}
var y; // y = undefined
var jump;
y = 12;  // y = 12
jump();  // y = 24
y = '10';  // y = '10'
jump();  // y = '1012'
jump = function () {
  y += 50;
};
jump(); // y = '101250'

