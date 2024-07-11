const map=new Map()
map.set('in',"india")
map.set('Am',"america")
map.set('En',"England")

// console.log(map);

for(let i of map){
    // console.log(i);
}

for(let [key,value] of map){
   // console.log(key +':-'+value);
}

const myObject={
    js:"javascript",
    cpp:"c++",
    swift:"swift for apple"
}
for(let key in myObject){
  //  console.log(`${key} shortcut is ${myObject[key]}`);
}

let programming=["js","cpp","c","java","python"]
for(let p in programming){
    console.log(programming[p]);
}