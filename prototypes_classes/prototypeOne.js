// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

// create method for upper problem
// let anotherUsername="chaiAurCode   ";
// String.prototype.trueLength=function(){
//     console.log(`true length is ${this.trim().length}`);
// }
// anotherUsername.trueLength();
// "iceTea".trueLength();



let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.anjali = function(){
    console.log(`anjali is present in all objects`);
}

Array.prototype.heyAnjali = function(){
    console.log(`Anjali says hello`);
}

// heroPower.anjali()
// myHeros.anjali()
// myHeros.heyAnjali()
// heroPower.heyAnjali()//throw error

// inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(Teacher.name);
console.log(TeachingSupport.makeVideo);