function filterByCategory(products){
    return function(category){
        return products.filter(function(product){
          return product.category==category;
        });
    };
}

var products=[{name:"shirt",category:"clothing"},{name:"pants", category:"clothing"},{name: "hat",category:"Accessories"},{name:"sunglasses",category:"Accessories"}];
var clothingProducts=filterByCategory(products)("clothing");
console.log(clothingProducts);


