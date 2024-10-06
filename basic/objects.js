const srNo = Symbol("key1")

let myarr1 = {
    name: "anjali",
    "teacher": "hitesh sir",
    course: "js",
    [srNo]: "great",
    "school no": 3,
    id: 1,
    email:"anjali@google.com"
}
// console.log(myarr1.name);
// console.log(myarr1["course"]);
// console.log(myarr1.teacher);
// console.log(myarr1["school no"]);
// console.log(myarr1[srNo]);

// console.log(myarr1);
// myarr1.email="anjali@microsoft.com"
// console.log(myarr1);
// Object.freeze(myarr1)
// myarr1.email="anjali@amazon.com"
// console.log(myarr1);

myarr1.greeting=function(){
    console.log(`hello my name is ${this.name}`);
}
myarr1.greeting()
