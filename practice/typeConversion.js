function convertToNumber(str){
    try{
        const num=Number(str);
        if(Number.isNaN(num)){
            throw new Error("Invalid number");
        }
     return num;
    } 
    catch(error){
        return error.message;
    }
}

console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));