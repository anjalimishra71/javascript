class product{
    name;
    age;
    collage;
    #name;
    constructor(n,a,c){
      this.#name=n;
      this.age=a;
      this.collage=c;
    }
    display(){
        console.log("name-",this.#name);
    }
    static custom(){
        console.log("yahoooooo....");
    }
}
const p=new product("anjali",18,"iics");
//p.name="ekta";
console.log(p);
p.display();
product.custom();