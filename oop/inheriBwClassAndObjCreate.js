// const PersonProto={
//     calcAge(){
//         console.log(2024-this.birthYear)
//     },

//     init(fullName,birthYear){
//        this.fullName=fullName;
//        this.birthYear=birthYear
//     }
// }

// const anju=Object.create(PersonProto)
// const StudentProto=Object.create(PersonProto)
// StudentProto.init=function(fullName,birthYear,course){
//     PersonProto.init.call(this,fullName,birthYear)
//     this.course=course
// }
// const kaju=Object.create(StudentProto)
// kaju.init("sanskriti",2007,"computer student")
// console.log(kaju);
// kaju.calcAge();

class Account{
    //1. public field(instance)
    locale=navigator.language
    
    //2. private field(instance)
    #movements=[]
    
    constructor(owener,currency,pin){
        this.owener=owener;
        this.currency=currency;
        this.pin=pin;
        this.#movements=[];
        this.locale=navigator.language;
        console.log(`thanks for opening ${this.owener}`);
        
    }

    //3. public method
    deposite(val){
        this.#movements.push(val)
        return this;
    }
    withdraw(val){
        this.deposite(-val)
        return this;
    }

    
    requestLoan(val){
        if(this.#approveloan(val)){
            this.deposite(val);
            console.log("loan passed..");
            return this;
        }
    }

    //4. private method
    #approveloan(val){
        return true;
    }

    //static public
    static helper(){
        console.log("help...");
        
    }
    
    
}

const acc=new Account("anjali","EUR",1111)
// acc.movements.push(10)
acc.deposite(10)
acc.deposite(20)
acc.withdraw(15)
acc.requestLoan(1000)
console.log(acc.owener);
Account.helper()
// console.log(acc.#movements);we can not access coz privare field
// console.log(acc.#approveloan); we can not access coz privare method
acc.deposite(2000).withdraw(5000).requestLoan(200);
