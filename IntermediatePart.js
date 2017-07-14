// FCC Intermediate Algorithm Scripting Challenges...

// Sum All Numbers in a Range
function sumAll(arr) {
  var x = 0;
  var l = Math.max(arr[0],arr[1]);
  var k = Math.min(arr[0],arr[1]);
  for(var i=k ; i<(l+1);i++){
    x = x + i ;
  }
  console.log(x);
  return x;
}
sumAll([1, 4]);

// Diff Two Arrays. (Symmetric Difference)
//(Hint of array.concat and finding those ele which are not in both Arrays, helped me! )
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  //
  var x = arr1.concat(arr2);

  for(var i = 0 ; i<x.length; i++){
    if(arr1.indexOf(x[i]) === -1 || arr2.indexOf(x[i]) === -1 )
      newArr.push(x[i]);
  }


  return newArr;  //["piglet", 4]
}
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
