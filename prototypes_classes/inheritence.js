class user{
    constructor(username){
        this.username=username;
    }
    login(){
        console.log(`user name is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,id,pass){
        super(username)
        this.id=id=1;
        this.pass=pass;
    }
    addCourse(){
        console.log(`this course was added ${this.username}`);
    }
}

const t1=new Teacher("anjali",1,456);
t1.addCourse();

const masalaChai = new user("masalaChai")

masalaChai.login()

console.log(t1 instanceof user);