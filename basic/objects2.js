// const tinderUser=new Allheroes()  //singalten
const tinderUser = {}   //double singalten
tinderUser.name = "anjali"
tinderUser.age = 21
tinderUser.id = 1
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("name"));



const regularUser = {
    email: "anjali@gmail.com",
    userData: {
        fullName: {
            first: "anjali",
            lname: " mishra"

        }
    }
}
// console.log(regularUser.userData.fullName);


const obj1 = { a: 1, b: "b", c: 3 }
const obj2 = { d: 5, e: "anju"}
// const obj3 = Object.assign( obj1 , obj2)
// console.log(obj3);
// console.log(obj3);
// console.log(obj1);
// console.log(obj2);

// const obj3 = Object.assign({}, obj1 , obj2)
// console.log(obj3);
// console.log(obj1);
// console.log(obj2);

// const obj3={...obj1,...obj2}
// console.log(obj3);


const obj=[
    {
        name:"anjali",
        age:15,
    },
    {
       course:"bca",
       id:1
    }
]

// obj.map((curr)=>console.log(curr))
// console.log(obj);


const course={
    name:"anjali",
    course:"js",
    courseInstructor:"hitesh sir"

}
console.log(course.courseInstructor);
const {courseInstructor:Instructor}=course
// console.log(Instructor);