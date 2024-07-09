/*
Write a function called countCharacters(str) that takes in a string and returns
an object with all the characters in the string as keys and the frequency that
the characters show up in the string as values.
*/
function countCharacters(str) {
  const obj = {};  // declare an object
  for(let char of str){   // iterate through the word to define the key values grabbing each letter

    let frequencyOfChar = (str, char) => { // for each character, iterate the word again to find its frequency
      let frequency = 0;
      for(let i = 0; i < str.length; i++){
        if(str[i] === char){
          frequency++;
        }
      }
      return frequency;
    };

  obj[char] = frequencyOfChar(str, char);
  }
console.log(obj);
}

console.log(countCharacters('hello')); // => { h: 1, e: 1, l: 2, o: 1}


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = countCharacters;
} catch {}
