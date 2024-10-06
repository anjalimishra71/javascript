// (function () {
//     console.log("i am happpy");
// })();

// (() => console.log("yeeee"))()

// const secureBooking = function () {
//     let passengerCount = 0
//     return function () {
//         passengerCount++
//         console.log(`${passengerCount} passenger`);
//     }
// }

// const booking=secureBooking()
// booking()
// booking()
// console.dir(booking)

// let f;
// const g = function () {
//     let a = 1
//     f = function () {
//         console.log(a * 2);
//     }
// }

// const h=function(){
//     let b=4
//     f=function(){
//         console.log(b*8);
        
//     }
// }
// g()
// f();
// h()
// f();

const passenger=function(n,wait){
  const preGroup=n/3
  setTimeout((function(){
    console.log(`we are now boarding all ${n} sec`);
    console.log(`there are three group, with ${preGroup} passenger`);
    
    
  }),wait*1000)
  console.log(`just wait passengers`);
  
}
passenger(120,3)