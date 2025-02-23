// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         // console.log("hello");
//         resolve()
    
//     }, 1000)
// })

// promiseOne.then(function () {
//     console.log("promise resolved")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("hello developers..");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("second promise completed..")
// })

// const thirdPromise=new Promise(function(resolve,reject){
// setTimeout(function(){
//     resolve({username:"anjali mishra",id:1,email:"anjali@gmail.com"})
// },1000)
// })
// thirdPromise.then(function(user){
//     console.log(user)
// })

const fourthPromise=new Promise(function(resolve,reject){
        const error=true;
        if(!error){
            resolve({username:"anjali",id:1});
        }
        else{
            reject("something went wrong");
        }
})

fourthPromise.then((user)=>{
    console.log(user);
    return user.username;
})
.then((user)=>{
    console.log(user);
})
.catch((user)=>{
    console.log(user)
})
.finally(()=>console.log("promise is either resolve or rejected"))


// const FifthPromise=new Promise(function(resolve,reject){
//     const error=true;
//     if(!error){
//         resolve({username:"anjali",id:1});
//     }
//     else{
//         reject("something went wrong");
//     }
// })

// async function consumeFivePromise(){
//     try{
//         const response =await FifthPromise
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consumeFivePromise()


// async function getAllUsers(){
//      try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users');
//         const data=await response.json();
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }
// getAllUsers()

// fetch('https://api.github.com/users/anjalimishra71')
// .then((response)=>{
//     return response.json()
// }
// )
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))

