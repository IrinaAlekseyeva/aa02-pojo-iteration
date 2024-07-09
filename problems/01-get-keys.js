/*
Write a function called getKeys(obj) that iterates through the object and
returns an array of the object's keys only.
*/

// Your code here 
function getKeys(obj){
  let arr = [];
  for(let key in obj){
    arr.push(key);
  }
  return arr;
}
const obj = {
  first: "1",
  second: 2,
  third: "three"
}
console.log(getKeys(obj));

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = getKeys;
} catch {}
