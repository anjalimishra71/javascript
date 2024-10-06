class person{
   constructor(name="anjali",age=18){
    this.name=name;
    this.age=age;
   }
   getDetails(){
    return `my name and age are ${this.name} ${this.age} `;
   }

}
const person1=new person();
console.log(person1.getDetails())