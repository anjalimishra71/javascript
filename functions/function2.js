function addNumbers(value1,...numbers){
        return numbers
}
// console.log(addNumbers(1,2,3,4))

let user={
    name:"anjali",
    course:"js"
}

function userDetails(user){
   console.log(`hey everyone my name is ${user.name} and course is ${user.course}`)

}

// userDetails(user)

let studends=["anjali",1,2004]
function aboutStudent(stu){
    // console.log(stu);
// return studends
return studends[1]
}
aboutStudent(studends)
console.log(aboutStudent(studends));