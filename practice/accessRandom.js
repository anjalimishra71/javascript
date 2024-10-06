function accessRanEle(arr){
    const [first,sec, , ,last]=arr;
    return [first,sec,last];
}
const arr=[1,2,3,4,5];
console.log(accessRanEle(arr));