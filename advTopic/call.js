// With the call() method, you can write a method that can be used on different objects.



// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an object as an argument (parameter).

// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
//  console.log(person.fullName.call(person1)); 


//call method accept argument
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
  
  console.log(person.fullName.call(person1, "Oslo", "Norway"));