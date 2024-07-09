/*
Write a function called get2CKeys(obj) that iterates through the object and
returns an array of the object's keys that have values with at least 2 'c's.
*/
// function twoCs returns true if the word has 2 c's and false if it has less than 2 c's
function hasTwoCs(word){
  let count = 0;
  for (let i = 0; i < word.length; i++){
    if(word[i] === "c"){
      count++;
      if(count >= 2){
        return true; 
      }
    }
  }
}

function get2CKeys(obj){
  let arr = [];

  for(let key in obj){
    if(hasTwoCs(obj[key])){
      arr.push(key);
    }
  }
  return arr;
}

const obj = {
  red: 'circle',
  blue: 'octagon',
  green: 'square'
}
console.log(get2CKeys(obj)); // ['red']

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = get2CKeys;
} catch {}
