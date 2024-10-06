function Student(name){
    this.name=name;
}
Student.prototype.printDetails=function(){
    console.log(`hello,my name is ${this.name}`);
};
const student=new Student("anjali");
student.printDetails();