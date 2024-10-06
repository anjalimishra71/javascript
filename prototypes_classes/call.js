function setUserName(username){
   
   
    this.username=username;
console.log("called");
}

function createUser(username,email,id){
   setUserName.call(this,username);
    this.email=email;
    this.id=1;
}
const userOne=new createUser("anjali","anjali@gmail.com",1)
console.log(userOne);