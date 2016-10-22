
//FreeCodeCamp - Find the Longest Word in a String
//https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string
//Oct 22

var newArray = [];

function findLongestWord(str) {
  var makeArray = /\s\s*/;
  var nameList = str.split(makeArray);
  for (var i = 0; i < nameList.length; i++) {
    newArray.push(nameList[i].length);
  }
  newArray.sort();
  console.log(newArray[newArray.length-1]);
}

findLongestWord("May the force be with you");
