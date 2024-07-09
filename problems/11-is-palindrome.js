/*
Given a sentence, write a function called isPalindrome that returns true if the
sentence can be rearranged into a palindrome and false if not. Ignore whitespace
and assume all characters are lowercase.

Note: A palindrome is a sequence that reads the same backwards as is does
forward.
*/
function countElements(arr) {
  let obj = {};

  for(let element of arr){
    let frequencyOfElement = (arr, element) => {
      let frequency = 0;

      for(let i = 0; i < arr.length; i++){
        if(element === arr[i]){
          frequency++;
        }
      }
      return frequency;
    };
    obj[element] = frequencyOfElement(arr, element);
  }
  return obj;
}

function getValues(obj){
  let arr = [];

  for (let key in obj){
    
    arr.push(obj[key]);
  }
  return arr;
}

const isPalindrome = sentence => {
  let sentenceArr = sentence.split(" ").join("").split("");
  console.log(sentenceArr);
  let obj = countElements(sentenceArr);
  let arrOfValues = getValues(obj);
  //return arrOfValues;
  // it can be just one odd number for the object to be a palindrome
  let count = 0;
  for(let elem of arrOfValues){
    if(elem % 2 !== 0){
      count++;
    }
  }
  if(count <= 1){
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('pop'));               // true;
console.log(isPalindrome('kayak'));             // true
console.log(isPalindrome('yo banana boy'));     // true
console.log(isPalindrome('this is the truth')); // false
console.log(isPalindrome('abab'));              // true
// // because 'abab' can be rearranged into a palindrome, 'abba'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = isPalindrome;
} catch {}
