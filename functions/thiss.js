const user={
     username:"anjalimishra",
     welcome: function(){
        // console.log(`welcome, ${this.username}`);
        // console.log(this)

    },
}
// user.welcome()
// user.username="sam"
// user.welcome()
// console.log(this)

function chai(){
    const chaiid=1
    // console.log(this.chaiid);
    console.log(this);
}
// chai()

const car2=function(){
    const chaiid=1
    console.log(this.chaiid);

    // console.log(this);
}
// car2()

// const car2=()=>{
//     const chaiid=1
//     // console.log(this.chaiid);

//     console.log(this);
// }
// car2()


// const add=(num1,num2)=>{
//     return num1+num2//explicit return
// }

// console.log(add(1,2))

// const addNumbers=(a,b)=> (a+b)//implicit
// console.log(addNumbers(1,55))

const addNumbers=(a,b)=>({use:"iphone"})
console.log(addNumbers(1,2));