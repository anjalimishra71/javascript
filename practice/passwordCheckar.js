class User{
    constructor(username,password){
        this.username=username;
        this.password=password;
    }
    getPassword(){
        return this.password.replace(/./g,"*");
    }
    setPassword(newPassword){
        let containsNumber=false;
        let containUppercase=false;
        for(let i=0;i<newPassword.length;i++){
            const char=newPassword.charAt(i);
            if(!isNaN(char)){
                containsNumber=true;
            }
            else if(char===char.toUpperCase()){
                containUppercase=true;
            }
        }
    
    if(newPassword.length>=8 && containUppercase && containsNumber){
        this.password=newPassword;
    }
    else{
      console.log("Error: password must be atleast 8 characters long and contain at least one number and one uppercase letter"
      );
    }
    }
}
const user=new User("anjali","Password123");
//console.log(user.getPassword());

//user.setPassword("myPassword");
user.setPassword("Password123");
console.log(user.getPassword());