// function greet(){
//     console.log("hello developers");
// }
// greet()

// function addTwoNumbers(num1,num2=7){
//     return num1+num2
// }

// console.log(addTwoNumbers(2))

function loginUserName(username){
    if(username==undefined){
        console.log("please enter username");
        return
    }
    return `this is my username ${username} `
}
console.log(loginUserName());