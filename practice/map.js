const rest = new Map();
rest.set('name', 'anjali');
rest.set(1, 'rollNo')
// console.log(rest);

rest
    .set('friends', ['shipali', 'ekta', 'khushi'])
    .set('mentor', ['sarvesh Sir', 'jason', 'hitesh Sir'])
     .set('open', 11)
    .set('close',23)
.set(true,'yeh ,its open')
.set(false,'its false')
// console.log(rest);
// console.log(rest.get('name'));
// console.log(rest.get(true));


// let time=17;
// console.log(rest.get(time>rest.get('open')&&time<rest.get('close')));

// console.log(rest.size);
// console.log(rest.has('open'));
// rest.delete(2)
// rest.clear();

rest.set([1,2],'test');
// console.log(rest);
// console.log(rest.get([1,2]));//this will not work;

const arr=[1,2]
rest.set(arr,'test');
// console.log(rest.get(arr));//this will work;

// console.log(rest.set(document.querySelector('h1'),"heading"))

// map iteration
const question=new Map([
    ['question','which is one of the best programming language...'],
    [1,'C'],
    [2,'java'],
    [3,'javaScript'],
    ['correct',3],
    [true,'correct'],
    [false,'try again 😒']
])

// console.log(question);
// for(const [key,value] of question){
//    if(typeof key==='number') console.log(`Answer ${key} : ${value}`);
   
// }

// const num=Number(prompt('enter number'));
const num=3;
// console.log(question.get(question.get('correct')==num));
// console.log(...question);
console.log(question.keys());
console.log(question.values());
console.log(question.entries());

