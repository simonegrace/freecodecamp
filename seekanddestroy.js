// HELP!!!!!!! This code is ugly as fuck and I think they wanted me to do it 
// using Array.filter(). I tried to use that but couldn't figure it out, so 
// I did it the ugly way. 

// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {

  var secondArray = [];
  var thirdArray = [];
  for (i=1; i<arguments.length; i++) {    
    secondArray.push(arguments[i]);
  }
  
  for (i=0; i< arr.length; i++) {
    
    if (secondArray.indexOf(arr[i]) == -1) {
      thirdArray.push(arr[i]);
    } 
   } 
  return thirdArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer([2, 3, 2, 3], 2, 3) should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].