const request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/name/portugal')
request.send();
console.log(request.responseText);

request.addEventListener('load',function(){
    const data=JSON.parse(this.responseText)
    console.log(data);
    
})