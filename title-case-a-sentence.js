
//FreeCodeCamp - Title Case a Sentence
//https://www.freecodecamp.com/challenges/title-case-a-sentence
//Oct 23
//http://jsbin.com/vuxitif/edit?js,console


var newString = [];

function titleCase(str) {

  var capitalizedString = str.toLowerCase();
  
  var splitString = capitalizedString.split(' ');
  
  for (var i = 0; i < splitString.length; i++ ) {
    splitString[i] = splitString[i].replace(splitString[i].charAt(0), splitString[i].charAt(0).toUpperCase());
  }
  console.log(splitString.join(' '));
  return splitString.join(' ');

}

titleCase("i'M a little tea pot");

  
//make everything lowercase
//  loop through the string:
//    whenever a space is found, capitalize the letter in the next position
//capitalize the first letter in the string
//


