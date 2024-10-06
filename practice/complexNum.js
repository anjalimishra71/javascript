class complexNum{
    #real;
    #imag;
    constructor(r,i){
        this.#real=r;
        this.#imag=i;
    }
    display(){
        console.log(this.#real,"+ i",this.#imag);
    }
    addTwoNum(r,i){
        this.#real+=r;
        this.#imag+=i;
    }
}
const c1=new complexNum(1,2);
c1.display();
c1.addTwoNum(2,3);
c1.display();