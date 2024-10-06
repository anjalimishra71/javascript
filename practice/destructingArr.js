
// let [var1, var2] = ["value1", "value2"];
// console.log(var1); // value1
// console.log(var2);

//destructing for random
// let teckstack=["html","css","js","java","c++"]
// let [teckstack0, , ,teckstack3]=teckstack
// console.log(teckstack);

//destructing for iteration
let productDetails=[["charger",500],["hdmi",200],["mobile phone",30000]];
for([productName,price] of productDetails){
    console.log(`product ${productName} is price ${price}`);
}

