fetch("http://type.fit/api/quotes")
.then(function f(response){
    return response.json();
})
.then(function f(value){
    console.log(value);
})