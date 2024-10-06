function maxAndMin(arr){
    return{
        Max: Math.max(...arr),min: Math.min(...arr)
    };
}

const arr=[1,9,3,4,5,6];
console.log(maxAndMin(arr));