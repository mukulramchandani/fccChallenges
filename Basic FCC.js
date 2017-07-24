 Algorithms Challenges -- FreeCodeCamp.com

//Reverse a String
function reverseString(str) {

  var arrayOfStrings = str.split("");
  arrayOfStrings.reverse();
  str = arrayOfStrings.join("");
  return str;
}

reverseString("hello");

// Factirialize the Number

function factorialize(num) {
 var facto = 1;
      for(var i = 1;i<=num;i++){
        facto = facto*i;
      }
  return facto;
}
factorialize(5);

// Check for Palindrome

function palindrome(str) {
  // Good luck!
  // str.replace(regexp|substr, newSubStr|function)
  var str1 = str.replace( /[^a-zA-Z0-9]/g , "").toLowerCase();
  var arrayOfStrings = str1.split('');

  var str2 = arrayOfStrings.reverse().join('');

  if(str1===str2)
    return true;
  else
    return false;
}

palindrome("Race Car"); //returns true
palindrome("not a palindrome"); //returns false


// Finding the longest Word in the String


function findLongestWord(str) {

  var arrayOfStrings = str.split(' ');
 var arrayOfLengths=[];

  for (var i=0;i<arrayOfStrings.length;i++){
    arrayOfLengths.push(arrayOfStrings[i].length); //UnStucked Me

  }

  var max = arrayOfLengths[0];
  for(var j = 1 ; j<=arrayOfStrings.length;j++)

    if(arrayOfLengths[j]>max)
      max = arrayOfLengths[j];


  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


// Title Case Of A Sentence...


function titleCase(str) {

  var arrayOfString = str.split(' ');
  var titleCaseArray = [];
  var arrayOfWord = [];
  var arrayOfLower = [];

 for(var i = 0; i<arrayOfString.length; i++) {

    arrayOfWord [i] =  arrayOfString[i][0].toUpperCase();
 }

  for (var j = 0 ; j<arrayOfString.length ;j++) {

    arrayOfLower[j] = arrayOfString[j].slice(1).toLowerCase();
  }

 for (var k = 0 ; k<arrayOfString.length ; k++){

   titleCaseArray [k] = arrayOfWord[k] + arrayOfLower[k]; //merging the arrays
 }

  return titleCaseArray.join(' ');
}



titleCase("sHoRt AnD sToUt");

// Return Largest Numbers in Arrays..


function largestOfFour(arr) {
  // You can do this!

  var arrayOfNumbers  = [];
  var largeNumberArray = [];

  for(var i = 0 ; i<arr[1].length ; i++){      // Sort using Comparision Function (desending)

    arrayOfNumbers [i] = arr[i].sort(function(a,b){return b-a ;});

    largeNumberArray[i] = arrayOfNumbers[i][0];
  }

  return largeNumberArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Confirm the Ending !


function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

   var arrayOfString = str.split(' ');
  var lastWord = arrayOfString[arrayOfString.length-1];

  var arrayOfCombinations = [];  //no use but a thought while coding!

  for(var i=0; i<=(lastWord.length-1); i++){   //my last Step;)

    if(lastWord.substring(i) == target)
      {
        return true;
      }
  }
     return false;


}

confirmEnding("Bastian", "n");

// Repeat a String repeat a string...
function repeatStringNumTimes(str, num) {
  // repeat after me

  // var newStr = str.repeat(num);   //Method not used in early versions of browsers
  var repeatStr = str;

  if(num > 0){
  for(var i =0 ; i<num-1;i++){
    repeatStr += str;
  }
  return repeatStr;
  }
  return "";
}

repeatStringNumTimes("abc", 3);

// Truncates a String...

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var truncates;
   if(str.length > num && num > 3){

     truncates = str.slice(0,num-3) + "...";
     return truncates;
  }
  if(num <= 3){
    truncates = str.slice(0,num) + "..." ;
    return truncates;
  }
  else
 return str;           //as per the condition was given.

}

truncateString("A-tisket a-tasket A green and yellow basket", 2); // A-...

// Chunkey Monkey -- Chunks Array In Groups

function chunkArrayInGroups(arr, size) {
  // Break it up.

  var twoDimensional = [];
  var i = 0;
  var oriSize = size;
  while(i<arr.length){

     twoDimensional.push(arr.slice(i,size));
   i = size;
    size = size+oriSize;

  }


  return twoDimensional;
}

chunkArrayInGroups(["a", "b", "c", "d", "e","f"], 2); //  slices array in groups of 2..

// Slasher Flick -- Return Remaining elements of Array...


function slasher(arr, howMany) {
  // it doesn't always pay to be first

  var sliced = arr.slice(howMany,arr.length);


  return sliced;
}
slasher([1, 2, 3], 2);

// Mutations..

function mutation(arr) {
     var i,j;


  var n = arr[0].toLowerCase().split('');
  var m = arr[1].toLowerCase().split('');
  var count =0;
  for(i = 0;i<m.length;i++){

      if(n.indexOf(m[i])==-1){   // important function. Helped from gitter
        return false;
      }

  }

        return true;
}

mutation(["hello", "hello"]);


// Falsy Bouncer..

function bouncer(arr) {
  // Don't show a false ID to this bouncer.

     var filtered = [];               // NaN is never equql to itself (used below)!


  for( var i = 0;i<arr.length;i++){

    if(arr[i]!==false && arr[i]!==null && arr[i]!==0 && arr[i]!=="" && arr[i]!== undefined && arr[i]===arr[i] ){
      filtered.push(arr[i]);
    }

  }

 return filtered;

}

bouncer([7, "ate", "", false, 9]); // returns [7,"ate",9] !

// Seek And Destroy (the one i wrote)

function destroyer(arr) {

  // Remove all the values

  var value = [];
  var counter = 0;

  var arr1 = arr;

    for(var i=1; i<arguments.length; i++){
    for(var j =arr.length-1;j>=0; j--){
    //   Iterating backwards only got this code executed,
    // with Forward way, it was not being executed
        if(arr[j]===arguments[i]){

          value = arr1.splice(j,1);
        }
      }
    }

  return arr1;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5); // returns [1]

// Seek and Destroy..by two campers. (Gitter <>)
function destroyer(arr) {
  // Remove all the values
    var args = Array.prototype.slice.call(arguments);
  function filteredArr(arr) {
    return args.indexOf(arr) === -1;
  }
  return arr.filter(filteredArr);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Seek and Destroy (2)
function destroyer(arr) {
  for(var i=1; i<arguments.length; i++) {
    while(arr.indexOf(arguments[i]) !== -1)
     arr.splice(arr.indexOf(arguments[i]), 1);
  }
  return arr;
}

// Where do I Belong.

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

      arr.sort(function(a, b) {return a - b;});

  for (var j =0;j<=arr.length;j++){
    if(arr[j]>=num){

      return j;

    }

   }
  return j-1;             // This where I got stuck.
 }
getIndexToIns([40, 60], 50); // returns 1

// Caesars Cipher (Rot-13 || Rotation 13)

function rot13(str) {  // LBH QVQ VG!

  var s1 = "";
  var s2 = "";
  var s3 = "";
  for(var i =0 ; i<str.length;i++){
    if((str.charCodeAt(i)>64 && str.charCodeAt(i)<78)){

      s1 =s1 + String.fromCharCode(str.charCodeAt(i)+13);

    }

    else if((str.charCodeAt(i)>=78 && str.charCodeAt(i)<91)){
      s1 = s1 + String.fromCharCode(str.charCodeAt(i)-13);

    }
    else if(str.charCodeAt(i)===32){
      s1=s1+ " ";

    }
    else if(str.charCodeAt(i)<65 || str.charCodeAt(i)>90){
      s1 = s1 + String.fromCharCode(str.charCodeAt(i));
    }

  }
   return s1;
}

// Change the inputs below to test
rot13("LBH QVQ VG!"); // returns YOU DID IT!
