let num = [1, 2, 3, 4, 5, 6]
// let sum = num.map((n) => n + 10)
// console.log(sum);

// let sum = num.map((n) => { return n + 10})
// console.log(sum);


// multiple map
let myNums=num.map((n)=>n*10).map((nb)=>nb+1).filter((n)=>n>30)
console.log(myNums);