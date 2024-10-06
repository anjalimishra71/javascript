function swap(arr1,arr2){
    [arr1,arr2]=[arr2,arr1]
   return [arr1,arr2]
}
let x=1;
let y=2;
[x,y]=swap(x,y)
console.log(x,y)