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
  var x = arr1.concat(arr2);

  for(var i = 0 ; i<x.length; i++){
    if(arr1.indexOf(x[i]) === -1 || arr2.indexOf(x[i]) === -1 )
      newArr.push(x[i]);
  }


  return newArr;  //["piglet", 4]
}
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);

// Roman numeral converter

//Not my solution.Got it from forum.

//this is a basic solution.
function convertToRoman(num) {
  var decimals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var romans = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  var r = [];
  for(var i = 0 ; i<decimals.length;i++){
    while(decimals[i]<=num){
      r.push(romans[i]);
      num = num - decimals[i];
    }
  }
  return r.join('');
}

convertToRoman(100);

// Wherefore art thou
// not my solution but learnt array.filter() a bit.
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  var x = Object.keys(source);

   arr = collection.filter(function(obj){
     for(var i=0;i<x.length;i++){
       if(!obj.hasOwnProperty(x[i]) || obj[x[i]] !== source[x[i]]){
         return false;
       }
     }
     return true;

   });

  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });

 // Search and Replace..
// Checking case was the main part.
function myReplace(str, before, after) {
  var y;
  if((after.charCodeAt(0)>=65  && after.charCodeAt(0) <= 91 || before.charCodeAt(0)>=65  && before.charCodeAt(0) <= 91) &&
        after.charAt() != after.charAt().toUpperCase()){
    y = after.charAt().toUpperCase();
   for(var i = 1;i<after.length;i++){
     y = y + after.charAt(i);
   }
   return str.replace(before, y);
 }

  return str.replace(before, after);
}

myReplace("Let us go to the store", "store", "mall");

//The PigLatin...
//Most basic soln. Code can be optimized.

function translatePigLatin(str) {
  var x = str.split('');
  var y  = [];
  var vov = ['a','e','i','o','u'];
  
  for(var j = 0 ; j<vov.length;j++){
     if(x.indexOf(vov[j]) === 0){
    return x.join('') + 'way';
  }
  }
    for(var i=0;i<x.length || i<5; i++){
   if(x[i] != 'a' && x[i] != 'e' && x[i] != 'i' && x[i] != 'o' &&  x[i] != 'u'){
     x.push(x[i]);
     delete x[i];
     }
   else return x.join('') + 'ay';
  }
  
}
translatePigLatin("eight"); //returns 'eightway'
