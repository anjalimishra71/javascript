const user={
    _email:"abc@gmail.com",
    _password:"abc",
  
    set email(email){
       this._email=email;
    },
     get email(){
          return this._email.toUpperCase();
     }

}
const tea=Object.create(user);
console.log(tea.email);