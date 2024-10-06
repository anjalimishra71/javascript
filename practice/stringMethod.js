// let name="anjali";
// console.log(name[1]);
// let para="hello currentLy i'm Learning JavaScript ";
// console.log(para.toLowerCase());
// console.log(para.toUpperCase());
// console.log(para.replace("he","HE"));
// console.log(para.includes('currMAMA'));
// console.log(para.startsWith('hello'));
// console.log(para.endsWith("Script"));

// let mentor="  jonas";
// console.log(mentor.trim());

// console.log("a+very+nice+string".split('+'));
// console.log("anjali mishra".split(" "));

// const [first,lastName]="anjali mishra".split(" ");
// const fullname=["miss.",first,lastName.toUpperCase()].join(" ");
// console.log(fullname);

// const capitalizeName=function(name){
//    const names=name.split(" ")
//    const upperNames=[]
//    for(const n of names){
//     //  upperNames.push(n[0].toUpperCase()+n.slice(1));
//        upperNames.push(n.replace(n[0],n[0].toUpperCase()))
//    }
//    console.log(upperNames.join(" "));
   
// }
// capitalizeName('hello not i we are learning js');
// capitalizeName('he is best mentor')

// const message="go to 23"
// console.log(message.padStart(10,'+'));

const maskCard=function(number){
    let str=number+" ";
    let last=str.slice(-4);
    return last.padStart(str.length,'*');
};
console.log(maskCard(12345678));

