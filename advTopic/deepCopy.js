// Now to create a deep copy of an object in JavaScript we use JSON.parse() and JSON.stringify() methods. 

let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
console.log("=========Deep Copy========");
let newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);



// Limitations of JSON.parse() and JSON.stringify()
// Lodash To Deep Copy



// const lodash = require('lodash');
// let employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000,
//     details: function () {
//         return "Employee Name: " 
//             + this.ename + "-->Salary: " 
//             + this.salary;
//     }
// }

// let deepCopy = lodash.cloneDeep(employee);
// console.log("Original Employee Object");
// console.log(employee);
// console.log("Deep Copied Employee Object");
// console.log(deepCopy);
// deepCopy.eid = "E103";
// deepCopy.ename = "Beck";
// deepCopy.details = function () {
//     return "Employee ID: " + this.eid 
//         + "-->Salary: " + this.salary;
// }
// console.log("----------After Modification----------");
// console.log("Original Employee Object");
// console.log(employee);
// console.log("Deep Copied Employee Object");
// console.log(deepCopy);
// console.log(employee.details());
// console.log(deepCopy.details());
