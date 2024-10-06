
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     }
//     const john = new Person('John', 30);

function Person(name) {
    this.name = name;
    }
    // adding a method to the Person prototype
    Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}.`);
    }
    console.log(studentTwo.age) // 15
    // adding a property to the Person prototype
    Person.prototype.age = 0;
    var person1 = new Person("John");
    person1.sayHello(); // "Hello, my name is John."
    console.log(person1.age); // 0