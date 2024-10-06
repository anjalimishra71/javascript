class User{
   constructor(name,email){
    this.name=name;
    this.email=email;
   }
  set email(email){
    this._email=email;
  }
  get email(){
    return `${this._email.toUpperCase()}`
  }

   set name(fullname){
    this._name=fullname;
   }
   get name(){
   return `${this._name.toUpperCase()}`;
   }
}

const user1=new User("anjali","anjali@gmail.com");
console.log(user1.name);
console.log(user1.email);