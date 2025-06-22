// When you assign one object to another using the assignment operator (=), a shallow copy is created:

let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}

// console.log("Employee=> ", employee);
let newEmployee = employee;    // Shallow copy
// console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
//res are same