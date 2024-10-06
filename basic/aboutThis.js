// console.log(this);
let fname="bitti";
const calcAge = function (birthyear) {
    console.log(2024 - birthyear);
    console.log(this);
}
// calcAge(2007)

const calcAgeArrow = birthdate => {
    console.log(this)
    console.log(2024 - birthdate);
}
calcAgeArrow(2005);


const anjali = {
    year: 2000,
    first: "anju",
    last: "mishra",

    calcage: function () {
        // console.log(this);
        // console.log(2024-this.year);

        // solution 1
        //       const self=this;
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.first + self.last);
        // }
        // isMillenial();

        // solution 2
        const isMillenial = () => {
            //console.log(this);
            console.log(this.year >= 1990)

        }
        isMillenial();
    },
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.fname}`);
      },

}
const kajal = {
    year: 2001
}

kajal.calcAge = anjali.calcage;
// kajal.calcAge()
anjali.calcage();
anjali.greet();