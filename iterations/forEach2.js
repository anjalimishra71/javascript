// const coding = ["js", "react", "html", "java"]
// let programming = coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(programming);  //we can't return anything



// const myNums=[1,2,3,4,5,6,7,8,9,10]
// let nums=myNums.filter((num)=>num>5)
// console.log(nums);

// let findNum = []
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// myNums.forEach((num) => {
//     if (num > 8) {
//         findNum.push(num)
//     }
// })

// console.log(findNum);


let book = [
    {
        title: "bool1", genre: "fiction", developed: 1995
        , publish: 2006
    },
    {
        title: "bool2", genre: "history", developed: 1990, publish: 2011
    },
    {

        title: "bool3", genre: "science", developed: 1954, publish: 2000
    },
    {

        title: "bool4", genre: "history", developed: 1998, publish: 2008
    },

]

let pro = book.filter((item) => item.genre == "history")
let pub=book.filter((p)=>{
  return p.publish>2000 && p.genre=="history"
})
console.log(pub);