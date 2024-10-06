class Car{
   constructor(company,model,year){
    this.company=company;
    this.model=model;
    this.year=year;
   }
   getDescription(){
    return `This is a ${this.year} ${this.model} ${this.company}`;
   }

}
const Mycar=new Car("skoda","Rapid",2022);
console.log(Mycar.getDescription())