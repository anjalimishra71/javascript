let num=[1,2,3]
// let myNum=num.reduce(function(acc,curr){
//        return acc+curr
// },0)
// console.log(myNum);

let myNum=num.reduce((acc,curr)=>acc+curr,0)
// console.log(myNum);

let courses=[
    {
        courseName:"js",
        price:3000
    },
    {
        courseName:"react",
        price:5000
    },
    {
        courseName:"mobile development",
        price:8000
    }
]
let total=courses.reduce((acc,curr)=>acc+curr.price,0)
console.log(total);