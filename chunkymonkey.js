// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


  function chunkArrayInGroups(arr, size) {
    // Break it up.
    var arrLength = arr.length; //6
    var numArray = arrLength/size; 
    var start = 0;
    var end = 0;
    var newArr = [];
     for (j=0; j< numArray; j++) {
          end = start + size;
          var subArr = arr.slice(start, end);
          newArr.push(subArr); 
          start = end;
     }
     return newArr;
    }

  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);

// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].