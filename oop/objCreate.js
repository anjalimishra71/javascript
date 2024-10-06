const PersonProto = {
    calcAge() {
        console.log(`${2024 - this.birthYear}`);
    },

    init(firstName, birthYear) {
        this.firstName = firstName
        this.birthYear=birthYear
    }
}
const anjali = Object.create(PersonProto)
console.log(anjali);
anjali.name = "anjali"
anjali.birthYear = 2007;
anjali.calcAge()
console.log(anjali.__proto__ == PersonProto);

const kaju=Object.create(PersonProto)
kaju.init("kajal",2002);
kaju.calcAge()
console.log(kaju);
