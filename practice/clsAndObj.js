class A{
    name;
    age;
    collage;
    constructor(n,a,c){
       this.name=n;
       this.age=a;
       this.collage=c;
       return {x:0,y:2};
    }
    display(){
        console.log("hello programmer....",this.name,this.age);
       // console.log("this refers to",this);

    }
}
const p=new A("anjali",18,"iics");
console.log(p);
//p.display();