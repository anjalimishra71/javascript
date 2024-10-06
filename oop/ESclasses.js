// class expression
// const person=class{}

// class declaration
class Person {
    constructor(fullname, birthYear) {
        this.fullname = fullname;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2024 - this.birthYear);
    }
    get age(){
        return this.birthYear;
    }

    //set property if already axist
    set fullname(name){
        if(name.includes(" ")) this._fullname=name;
        else {
            alert("name is not a full name")
        }
    }

    static hey(){
        console.log('hey everyone');
        
    }
}
Person.hey();
const anjali=new Person("anjali mishra",2007);
console.log(anjali);
anjali.calcAge();
// anjali.fullnamee="kaju";

console.log(anjali.__proto__==Person.prototype);
Person.prototype.greet=function(){
    console.log(`Welcome ${this.firstName} in google`);
    
}
anjali.greet();

//1. classes are not hoisted
//2. classes are first class citizens
//3. classes are executed in strict mode

//get and set

const account={
  owner:"anjali",
  movements:[100,300,200,500],

  get latest(){
    return this.movements.slice(-1).pop()
  },
  set latest(mov){
    this.movements.push(mov);
  },
}
console.log(account.latest);
account.latest=1000
console.log(account.movements);

