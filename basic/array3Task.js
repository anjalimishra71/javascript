// const checkDog=function(dogsJulia,dogsKute){
//     const dogsJuliaCorrect=dogsJulia.slice();
//     dogsJuliaCorrect.splice(0,1)
//     dogsJuliaCorrect.splice(-2)
//     const dogs=dogsJuliaCorrect.concat(dogsKute)
//     dogs.forEach((element,i )=> {
//         if(element>=3) console.log(`${i+1} dog is adult, ${element} year old`);
//         else console.log(`${i+1} dog is poopy, ${element} year old`);
                                       
//     });        
// }
// checkDog([3,5,2,7,12],[4,1,15,8,3])

//=========TASK2===========
// const calcAverageHumanAge=function(ages){
//     const humanAge=ages.map(age=> age<=2?2*age:16+age*4)
//     console.log(humanAge);
    
//     const adult=humanAge.filter(hAge=>hAge>=18)
//     console.log(adult);

//     // const avg=adult.reduce((acc,curr)=>acc+curr,0)/adult.length;
//         const avg=adult.reduce((acc,curr,i,arr)=>acc+curr/arr.length,0);//best use case of arr

// return avg;
// }
// const average=calcAverageHumanAge([4,1,15,8,3,4,5])
// console.log(average);


//=========Task2 using arrow and channing method
    const calcAverageHumanAge=ages=>ages.map(age=> age<=2?2*age:16+age*4).filter(humanAge=>humanAge>=18).reduce((acc,curr,ind,arr)=>acc+curr/arr.length,0);
// console.log(calcAverageHumanAge([4,1,15,8,3,4,5]));


//============task3============
const dogs=[
    {weight:22,curFood:240,owners:['Alice','Bob']},
    {weight:8,curFood:200,owners:['Matilda']},
    {weight:13,curFood:275,owners:['Sarah','john']},
    {weight:32,curFood:340,owners:['Micheal']},
]
//1
dogs.forEach(dog=>(dog.recFood=Math.trunc(dog.weight**0.73*28)))
// console.log(dogs);

//2
const dogSarah=dogs.find(dog=>dog.owners.includes('Sarah'))
// console.log(dogSarah);
// console.log(`Saras dog eating ${dogSarah.curFood>dogSarah.recFood?'much':'little'} food`);

//3
const owenersEatTooMuch=dogs.filter(dog=>dog.curFood>dog.recFood).flatMap(dog=>dog.owners)
const owenersEatTooLitle=dogs.filter(dog=>dog.curFood<dog.recFood).flatMap(dog=>dog.owners)

// console.log(owenersEatTooMuch);
// console.log(owenersEatTooLitle);
//4
// console.log(`${owenersEatTooMuch.join(' and ')} dogs eat to much`);
// console.log(`${owenersEatTooLitle.join(' and ')} dogs eat to little`);

//5
// console.log(dogs.some(dog=>dog.curFood===dog.recFood));

//6
const checkEatingOkay=dog=>dog.curFood>dog.recFood*0.9 && dog.curFood>dog.recFood*1.1;
// console.log(dogs.some(checkEatingOkay));

//7
// console.log(dogs.filter(checkEatingOkay));

//8
const dogSorted=dogs.slice().sort((a,b)=>a.recFood-b.recFood);
console.log(dogSorted);
