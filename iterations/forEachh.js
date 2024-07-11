let coding=["js","java","python"]
// coding.forEach(function(item){
//     console.log(item);
// })

coding.forEach((item)=>{
 //   console.log(item);
})

function printMe(item){
 // console.log(item);
}

coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
// console.log(item,index,arr);
})

const language=[
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"javascript",
        languageFileName:"js"
    },
]

language.forEach((item)=>{
    console.log(item.languageName);
})