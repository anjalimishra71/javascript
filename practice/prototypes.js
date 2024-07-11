function car(make,model){
    this.make=make
    this.model=model
}
car.prototype.year=2020
let myCar=new car("toyota","camry")

console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);