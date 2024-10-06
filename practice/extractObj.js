const person={
  name: "anjali"
  ,age: 18
  ,address:{
    street: "B8, Block B, Industrial Area.",
     city:"allahabad",
     steet:"Uttar-pradesh"
  }

};
function extractData(obj){
   const{
    name,
    address:{street}
   }=obj;
   return [name,street];
}

console.log(extractData(person));