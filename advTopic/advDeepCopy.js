// import cloneDeep from 'lodash/cloneDeep';


const original = {
  name: "Anjali",
  age: 21,
  hobbies: ["coding", "reading"],
  joined: new Date(),
  details: new Map([["college", "MGDC"], ["course", "BCA"]]),
  greet: function () {
    return `Hello, ${this.name}`;
  }
};

/////using structuredClone
// const deepCopy = structuredClone(original);

// console.log("Original Date:", original.joined instanceof Date);  // true
// console.log("Copied Date:", deepCopy.joined instanceof Date);    // true

// console.log("Original Map:", original.details instanceof Map);   // true
// console.log("Copied Map:", deepCopy.details instanceof Map);     // true

// console.log("Greet function in copy:", deepCopy.greet);          // undefined




/////using cloneDeep

// const deepCopy = cloneDeep(original);

// console.log("Original Date:", original.joined instanceof Date);  // true
// console.log("Copied Date:", deepCopy.joined instanceof Date);    // true

// console.log("Original Map:", original.details instanceof Map);   // true
// console.log("Copied Map:", deepCopy.details instanceof Map);     // false ❌

// console.log("Function exists:", typeof deepCopy.greet);          // "function" ✅