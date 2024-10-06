class Person {
    constructor(fName, lName, age, city,level) {
    this.fName = fName
    this.lName = lName
    this.age = age
    this.city = city
    this.level = 0
    this.skills = []
    }
    getFullName() {
    const fullName = this.fName + ' ' + this.lName
    return fullName
    }
    }
    const person1 = new Person('Anuj', 'Kumar', 31 , 'Delhi',3)
    const person2 = new Person('Rohan', 'Sharma', 28 , 'Jaipur',2,'aa')
    console.log(person1.level)
    console.log(person2.level)
    console.log(person1.skills)
    console.log(person2.skills)