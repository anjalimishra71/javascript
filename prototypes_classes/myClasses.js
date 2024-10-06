// class user{
//     constructor(username,email,pass){
//         this.username=username
//         this.email=email
//         this.pass=pass
//     }
//   encryptPassword(){
//     return `${this.pass}abc`;
//   } 
//   changeUsername(){
//     return `${this.username.toUpperCase()}`
//   }
// }
// const userOne=new user("anjali","anjali@gmail.col",123)
// console.log(userOne.encryptPassword());

// behind the scene
function user(username,email,pass){
    this.username=username
    this.email=email
    this.pass=pass;
}
user.prototype.encryptPassword=function(){
    return `${this.pass}abc`;

}
user.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`

}

const userOne=new user("anjali","anjali@gmail.col",123)
console.log(userOne.changeUsername());
