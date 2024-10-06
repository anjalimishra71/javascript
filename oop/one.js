// const user={
//     username:"anjali",
//     passaword:1234,
//     email:"anjalimishra@gmail.com",
//       getEnformation:function(){
//          console.log(`hello my id is ${this.passaword}`);
//         console.log(this);
//       }
// }
// console.log(user.passaword);
// console.log(user.getEnformation());

function userDetails(username,id,password){
    this.username=username;
    this.id=id;
    this.password=password;
    this.greeting=function(){
        console.log("hey............");
    }
  return this;
}
// const userOne=userDetails("anjali",1,123);
// console.log(userOne);
// const userTwo=userDetails("microsoft",1,341);
// console.log(userTwo);

const userOne=new userDetails("anjali",1,123);
const userTwo=new userDetails("microsoft",1,341);

// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);
