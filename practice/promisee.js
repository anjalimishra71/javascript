function createPromise(){
  return new Promise(function exec(resolve,reject){
    setTimeout( function f(){
        console.log("timer done");
        reject("done");
    },3000);
  })
}
console.log("start");
let x=createPromise();
console.log("get a new promise");
x.then(function f(){
    console.log("promise done");
}).catch(function g(){
    console.log("handaled");
})
console.log("end");