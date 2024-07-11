let arr=["html","css","js","react"]
let [ele1,ele2,...remainingEle]=arr
console.log(ele1);
console.log(remainingEle);


let arr2={name:"anjali",course:"js",id:1}
let {name,...remain}=arr2
console.log(name);
console.log(remain);