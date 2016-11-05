function AlphabetSoup(str) { 

  var letters = str.split('');
  
  // code goes here  
  var str = letters.sort();
  var str = str.join('');
  console.log(str);

  return str; 
         
}
   
// keep this function call here 
AlphabetSoup('coderbyte');  