class User{
    constructor(username){
        this.username=username;
    }
    logme(){
        console.log(`log me in this id ${this.username}`);
    }
   static passaword(){
    return `123`;
   }
}

class Teacher extends User{
    constructor(id,name,username){
        this.id=id
        this.name=name;
        super(username)
    }
}
const u=new User("anjali")
u.logme()
// console.log(u.passaword());//we can not access

const t=new Teacher(1,"anjali","anjali@gmail.com")
// console.log(t.passaword());//we can not access
