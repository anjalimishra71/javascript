const Person = function (firstName, birthYear) {
    // console.log(this)
    //instance property
    this.firstName = firstName
    this.birthYear = birthYear

    //never do this
    this.calcAge = function () {
        console.log(2024 - this.birthYear);
    }
    
}
const anjali = new Person("anjali", 2007)
console.log(anjali);

//new {} is created
//function is called , this={}
//{} liked to prototype
// function automatically return {}

const kaju = new Person("kaju", 2002)

console.log(anjali, kaju);

const jay = 'jay'
console.log(anjali instanceof Person);
console.log(jay instanceof Person);

anjali.calcAge();




//prototype
// console.log(Person.prototype);

// Person.prototype.calcAge=function(){
//     console.log(2024 - this.birthYear);
// }
// anjali.calcAge()

// console.log(anjali.__proto__);
// console.log(anjali.__proto__===Person.prototype);

// console.log(Person.prototype.isPrototypeOf(anjali));
// console.log(Person.prototype.isPrototypeOf(kaju));
// console.log(Person.prototype.isPrototypeOf(Person));

//prototypeOfLinkedObject
// Person.prototype.spanies="Home sapinens"
// console.log(anjali.spanies,kaju.spanies);

// console.log(anjali.hasOwnProperty('firstName'));
// console.log(anjali.hasOwnProperty('spanies'));

// console.log(anjali.__proto__);
// console.log(anjali.__proto__.__proto__);
// console.log(anjali.__proto__.__proto__.__proto__);

// // console.log(Person.prototype.constructor)
// console.dir(Person.prototype.constructor)

// const arr=[1,2,3,4,3,4,1,5]  //new Array==[]
// console.log(arr.__proto__);

// console.log(arr.__proto__==Array.prototype);

// console.log(arr.__proto__.__proto__);


// Array.prototype.unique=function(){
//     return [...new Set(this)]
// }
// console.log(arr.unique());

// const h1=document.querySelector('h1')
// console.dir(x=>x+1)