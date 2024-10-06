function numberCheckar(numbers){
    return function(num){
        return numbers.includes(num);
    };
}
const arr=[1,2,3,4,5];
const checkNum=numberCheckar(arr);
console.log(checkNum(3));
console.log(checkNum(6));