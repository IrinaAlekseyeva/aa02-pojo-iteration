/*
Write a function called commonKeys(obj1, obj2) that returns an array of all the
common keys between the two input objects, obj1 and obj2.
*/

function commonKeys(obj1, obj2) {
  let arr1 = Object.keys(obj1);
  let arr2 = Object.keys(obj2);
  let commonKeysArr = [];

  for(let i = 0; i < arr1.length; i++){
    if(arr2.includes(arr1[i])){
      commonKeysArr.push(arr1[i]);
    }
  }
  
return commonKeysArr;
}

console.log(commonKeys(
  { species: 'Dog', color: 'Brown',  numLegs: 4 },
  { numLegs: 8, species: 'Octopus', lifeSpan: '2 years' }
)); // => [ 'species', 'numLegs' ]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = commonKeys;
} catch {}
