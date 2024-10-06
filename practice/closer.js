'use strict'
// const bookings=[];
// const createFunction=function(flightNum,numPassenger,price="1k"){
//  numPassenger=numPassenger||1;
// const booking={
//     flightNum,
//     numPassenger,
//     price
// }
// console.log(booking);
// bookings.push(booking)
// }
// createFunction("123ppg")
// createFunction('123eee',undefined,'1k')


// const flight='AVB123'
// const anjali={
//    name:"anjali mishra",
//    password:123456
// }

// const checkIn=function(flight,anj){
//     anj.name='miss'+anj.name;
//     if(anj.password==123456){
//         console.log("heeeee");
//     }
//     else{
//         console.log('haaaaaa');
//     }
// }
// checkIn(flight,anjali)
// console.log(anjali);

// const newAnj=anjali;
// const newPassword=function(anj){
// anj.password=Math.trunc(Math.random()*10000)
// }

// newPassword(newAnj);
// checkIn(flight,anjali)


// const oneword=function(str){
//     return str.replace(/ /g,"" ).toLowerCase();
// }

// const upperFirstWord=function(str){
//     const [first,...other]=str.split(" ");
//     return [first.toUpperCase(),...other].join();
// }

// const transform=function(str,fn){
//     console.log("my line is: ",str);
//     console.log('transformed string : ',fn(str));
//     console.log('my one word ',oneword(str));

// }
// transform('javasCript is bestest language',upperFirstWord);


// const high5 = function () {
// console.log('🔔');

// };
// document.body.addEventListener('click',high5)
// ['anjali', 'kajal', 'jojo'].forEach(high5);

// const greet=function(mess){
//     return function(name){
//         console.log(`${mess} ${name}`);
        
//     }
// }

// const sec=greet('hey');
// sec('anjali')
// greet('hello')('jojo')

//using arrow function

const greet=greeting=>name=>console.log(`${greeting} ${name}`);

const g=greet('yooo')
g('anjali')
greet('hello')('jojo');