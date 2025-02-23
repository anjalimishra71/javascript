// With the apply() method, you can write a method that can be used on different objects.
// The Difference Between call() and apply():
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   console.log(person.fullName.apply(person1)); 



//pass arguments
const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
 console.log(person.fullName.apply(person1, ["Oslo", "Norway"])) 








//2
console.log(Math.max.apply(null, [1,2,3]));
console.log(Math.max.apply(Math, [1,2,3]));
console.log(Math.max.apply(" ", [1,2,3]));

