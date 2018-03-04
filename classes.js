
// reverse an array using recursion
let reverseArrayRecursion = (arr, newArr=[]) => {
  if (arr.length == 0) {
    return newArr;
  }
  else{
    newArr.push(arr.pop())
    return reverseArray(arr, newArr)
  }
}

let reverseArray = (arr) => {
  let newArr = []

  for (let i=0; i<arr.length; i++){
    let newArr = []
    newArr.push(arr.pop())
  }

  return newArr
}


console.time('reverseArrayRecursion time elapsed');
reverseArrayRecursion(reverseArrayRecursion([1,2,3,4]))
console.timeEnd('reverseArrayRecursion time elapsed');

console.time('reverseArray time elapsed');
reverseArray(reverseArray([1,2,3,4]))
console.timeEnd('reverseArray time elapsed');
