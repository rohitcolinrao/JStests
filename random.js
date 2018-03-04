

//closure
let add = (num) => (
    (num2) => {
      return num + num2
    }
  )

let addThree = add(3)
let addFour = add(4)

// console.dir(addThree(5))
// console.log(addThree)



let isPrime = (n) => {
  var divisor = 2

  while (n > divisor){
    if(n % divisor == 0){
     return false
    }
    else
      divisor++
  }
  return true
}

console.log(isPrime(137))
console.log(isPrime(237))


let removeDuplicate = (arr) => {
  let exists ={},
      outArr = [],
      elm;

  for(let i =0; i<arr.length; i++){
    elm = arr[i]
    if(!exists[elm]){
      outArr.push(elm)
      exists[elm] = true
   }
  }
  return outArr
}
console.log(removeDuplicate([12,34,56,12,1,3,4,1,2]))



let swapNum = (a, b) => {
  console.log('before swap: ','a: ', a, 'b: ', b)
  b = b-a
  a = a+b
  b = a-b
  console.log('after swap: ','a: ', a, 'b: ', b)
}
console.log(swapNum(10,15))



let reverseStr = (str) => {
  if(!str || str.length <2) return str
  return str.split('').reverse().join('')
}
console.log(reverseStr("yo"))
