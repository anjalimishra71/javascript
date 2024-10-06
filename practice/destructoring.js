const stu={
    name:["anjali","shipali","ekta"],
    roll:[1,2,3],
    sub:"programming",
    orderPizza:function(food,...remainingFood){
        console.log(food)
        console.log(remainingFood)

    }
}
const arr=[1,2,...[3,4]]
console.log(arr)


const [a, ,b,e,...other]=[...stu.name,...stu.roll]
console.log(a)
console.log(b)
console.log(other)


stu.orderPizza("apple","pineapple","orange")
function add(...arg){
    
    console.log(arg);
}
add(1,2,3,4);
add(1,2);