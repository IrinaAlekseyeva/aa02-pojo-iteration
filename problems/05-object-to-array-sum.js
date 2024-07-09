/*
Write a function called objectToArraySum(obj) that iterates through all
key-value pairs of the object and returns an array of nested array where each
nested array is formatted such that the first element is the key and the second
element is the sum of all the numbers in the array value.
*/

function arrSum(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function objectToArraySum(obj){
  let arr = [];
  

  for(let key in obj){
    let subArr = [];

    subArr.push(key, arrSum(obj[key]));
    arr.push(subArr);
  }
  return arr;
}

let populations = {
  neighborhood1: [10, 1, 3, 6],
  neighborhood5: [],
  neighborhood8: [5, 0, 3, 2]
}
console.log(objectToArraySum(populations));
//=> [['neighborhood1', 20], ['neighborhood5', 0], ['neighborhood8', 10]]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = objectToArraySum;
} catch {}
