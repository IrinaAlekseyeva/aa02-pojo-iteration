/*
Write a function called countElements(arr) that takes in an array and returns
an object with all the elements in the string as keys and the frequency that
the elements show up in the string as values.
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

console.log(countElements(
  ['app', 1, 2, 'app', 2, 2]
)); // => { app: 2, 1: 1, 2: 3 }


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = countElements;
} catch {}
