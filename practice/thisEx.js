function person(name,age){
    this.name=name
    this.age=age
}
person.prototype.greet=function(){
    console.log(`hi, my name is ${this.name} and my age is ${this.age}`);
}
const anj=new person('json',30)
const darsu=new person('json',25)
anj.greet()