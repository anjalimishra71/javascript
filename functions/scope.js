let a=10
const b=20
var c=30

if(true){
    let a=15
    const b=25
    var c=35  //problem in var
}
console.log(a);
console.log(b);
console.log(c);


function user(){
    username="anjali@gmail.com"
    function userSec(){
        username2="anjaliMicrosoft@gmail.com"
  console.log(username,username2);
    
}
// console.log(username2);
userSec()
}

user()


if(true){
    username="hello"
    if(username=="hello"){
       const greet="welcome"
        console.log(greet);
    }
    // console.log(greet); ---this is not allowed
}