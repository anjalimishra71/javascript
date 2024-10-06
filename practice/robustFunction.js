function getPerson(person){
   try{
    if(typeof person!=="object" || !person.name   || !person.age){
        throw new Error("Invalid parameter type");
    }
    return `Name: ${person.name},Age:${person.age}`;
   }catch(error){
    error.message;
   }
}
console.log(getPerson({name: "anjali",age: 20}));
console.log(getPerson({"name": "Mithun"}));
console.log(getPerson({name: "Mithun"}));