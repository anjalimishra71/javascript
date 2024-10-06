function filterByCategory(products){
    return function (category){
    return products.filter(function (product) {
             return (product.category==category)
    })
    }
}

 var products=[{name:"hello",category:"gen"},{name:"hii",category:"gen"},{name:"byee",category:"obc"}];
 var c=filterByCategory(products)("obc");
 console.log(c); 



