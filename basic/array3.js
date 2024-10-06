// const arr=[10,20,30]
//   console.log(arr.slice(-1)[0]);
//   console.log(arr.at(0));
//   console.log(arr.at(-1));

const movements = [100, -20, 30, -500, 0, -600, 100];
// for(const [ind,movement] of movements.entries()){
//     if(movement>0){
//         console.log(`Movement ${ind+1}: your money is white ${movement}`);
//     }
//     else{
//         console.log(`Movement ${ind+1}: your money is white ${Math.abs(movement)}`);

//     }
// }

// movements.forEach(function(movement,ind){
//     if(movement>0){
//         console.log(`Movement ${ind+1}: your money is white ${movement}`);
//     }
//     else{
//         console.log(`Movement ${ind+1}: your money is white ${Math.abs(movement)}`);

//     }
// })

// const person=new Map([
//     ['family','everything'],
//     ['friends','masti'],
// ])
// person.forEach(function(value,key,map){
//     console.log(`${key}=${value}`);

// })

// const names=new Set(['anjali','ekta','kaju','ekta'])
// console.log(names);

// names.forEach(function(value,key,map){
//     console.log(`${key}:${value}`);   //both key and value are same

// })

// names.forEach(function(value,_,map){
//     console.log(`${value}:${value}`);   
// })

const num = [1, 2, 101, 3, 6, 7]
// const newnum=num.map((n)=> n*2)
// console.log(num);
// console.log(newnum);

// const newarr=[]
// let mul=3
// for(const n of num){
// newarr.push(n*mul);
// }
// console.log(newarr);

// const movementDescription=movements.map((val,ind)=>`Movement ${ind+1}: your money is ${val>0? "white": "black"} ${Math.abs(val)} `)
// console.log(movementDescription);

//++++++++++++Filter++++++++++++++//
// const posVal = movements.filter(mov => {
//     return mov > 0
// })

// const arr = []
// for (const pos of movements) {
//     if (pos > 0) {
//         arr.push(pos)
//     }
// }
// console.log(posVal);
// console.log(arr);

//-------------Reduce----------
// const sum = num.reduce(function (acc, curr, ind, arr) {
//     return acc + curr;
// }, 0)
// console.log(sum);


///maximum value

// const max = num.reduce(function (acc, curr) {
//     if (acc > curr) return acc;
//     else
//         return curr;

// }, num[0])
// console.log(max);


//=======================
// const firstVal=movements.find(mov=>mov<0)
// console.log(firstVal);
// console.log(movements);

const person = {
    name: "anjali",
    age: 18,
    movements: [1, 2, -6, -7, 20],
    friends: ["eku,shipu,khusu"]
}

const person2 = {
    name: "jojo",
    age: 23,
    movements: [1, 21, 5, -6, 100, 13],
    friends: ["lovely", "pramita"]
}

const person3 = {
    name: "kaju",
    age: 21,
    movements: [10, 2, 17],
    friends: ["lovely,pramita,kajal"]
}
const acount = [person, person2, person3];
// const findName=acount.find(acc=>acc.name==="jojo")
// console.log(findName);

//=============Some=========
// const exOfSume=movements.some(ele=>ele>0)
// const exOfSume2=movements.some(ele=>ele==1001)
// console.log(exOfSume);
// console.log(exOfSume2);

//==========every=========
// const exOfEvery=movements.every(ele=>ele>0)
// const exOfEvery2=person.movements.every(ele=>ele>0)
// console.log(exOfEvery);
// // console.log(exOfEvery2);
// const deposite=mov=>mov>0;
// console.log(movements.some(deposite));
// console.log(movements.every(deposite));
// console.log(movements.filter(deposite));




//=============flat()=======
// const arr=[1,2,[3,4,5],[1,2]]
// console.log(arr.flat());
// const deepArr=[1,2,[3,4,[5,6],[6]]]
// console.log(deepArr.flat(2));

// const overAllBudget=acount.map(mov=>mov.movements).flat().reduce((acc,curr)=>acc+curr,0);
// console.log(overAllBudget);


//==============sort=====
// let name=["anjali","kaju","jojo"]
// name.sort();
// console.log(name);

// console.log(movements);

//return <0,A,B
//return >0,B,A
// movements.sort((a,b)=>{
//     if(a>b) return 1
//     if(b>a) return -1
// })
// console.log(movements)


// console.log([1,2,3,4,5]);
// console.log(Array(1,2,3,4,5));

// const x=new Array(7)
// console.log(x);

// x.fill(1)
// x.fill(1,3,6)
// console.log(x);

//array.form
// const y=Array.from({length:7},()=>1)
// const z=Array.from({length:7},(_,i)=>i+1)

// console.log(z);


//========Array methods==========
//1
const acountSum = acount.flatMap(ele => ele.movements).filter(mov => mov > 0).reduce((acc, curr) => acc + curr, 0)                 //map and then flat=flatmap
// console.log(acountSum);

//2
const acountSumUsingRed = acount.flatMap(ele => ele.movements).reduce((count, curr) => curr > 10 ? count + 1 : count, 0);
// console.log(acountSumUsingRed);

//3
// const sums = acount.flatMap(ele => ele.movements)
//     .reduce(
//         (sum, curr) => {
//             curr > 0 ? (sum.deposite += curr) : (sum.withdraw += curr)
//             return sum;
//         }, { deposite: 0, withdraw: 0 }
//     )
// console.log(sums);
//or

const { deposite, withdraw } = acount.flatMap(ele => ele.movements)
    .reduce((sum, cur) => {
        sum[cur > 0 ? 'deposite' : 'withdraw'] += cur;
        return sum;
    }, { deposite: 0, withdraw: 0 }
    )
console.log(deposite, withdraw);


//task
const convertTitleCase = function (title) {
    const exception = ["is", "an", "a", "with", "oh", "and", "the", "but", "in"];
    const titleCase = title
        .toLowerCase()
        .split(' ')
        .map(word => exception.includes(word) ? word : word[0].toUpperCase() + word.slice(1))
        .join(' ');
    return titleCase;
}
console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not to0 long"));
console.log(convertTitleCase("and here another title with an EXAMPLE"));
