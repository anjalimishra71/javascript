function createPromise(){
    return new Promise(function exec(resolve,reject){
        setTimeout(function f(){
            console.log("times done");
        },3000);
        reject(10);
    })
}
async function consume(){
    try{
    console.log("inside function");
    const response=await createPromise();
    const response1=await createPromise();
   console.log("responced", response);
    }
    catch(exp){
        console.log("handaled",exp);
    }
}
console.log("hello");
consume();
console.log("dear");