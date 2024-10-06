// const exSetInterval = setInterval(myRepeatedMessage, 300);
// function myRepeatedMessage()
// {
// console.log('Hi');
// console.log('Hi Again !');
// }

// const exSetInterval = setInterval(myRepeatedMessage, 300, 'Hi', 'Hi Again');
// function myRepeatedMessage(a,b)
// {
// console.log(a);
// console.log(b);
// }

setInterval(timer, 1000);
function timer() {
const date = new Date();
const newTime = date.toLocaleTimeString();
console.log(newTime);
}