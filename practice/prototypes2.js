// function person(name,age){
//      this.name=name
//      this.age=age
// }
// let obj=new person("anjali",23)
// console.log(obj.__proto__===person.prototype);
// console.log(obj.name);

// person.prototype.sayHello=function(){
//     console.log('hello my name is '+this.name);
// }
// const myObj=new person("anjali",18)
// myObj.sayHello()

// myObj.sayHello=function(){
//     console.log('hello from anjali');
// }
// myObj.sayHello()

// let Person=new person("aadarsh")
// Person.sayHello()

// function student(name,studentId){
//     this.name=name
//     this.studentId=studentId
// }
// student.prototype=new person()
// student.prototype.sayHello=function(){
//     console.log(`hello my name is ${this.name} and my id ${this.studentId}`);
// }
// let Student=new student("sanskar",1)
// Student.sayHello() 

function Person(name){
    this.name=name
}
Person.prototype.sayHello=function(){
 console.log(`hello khala ${this.name}`);
}
let person=new Person("ankita")
person.sayHello()