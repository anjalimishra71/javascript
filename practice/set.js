const order=new Set([
    'banana',
    'apple',
    'samosa',
    'pineapple'
]);
console.log(new Set('jonas'));
console.log(order.size);
console.log(order.has('apple'));
console.log(order.has('pizza'));

order.add('chapati');
order.delete('banana')
// order.clear()
console.log(order);

for(let odr of order) console.log(odr);

const staff=["waiter","chef","waiter","manager","chef"];
const uniqStaff=new Set(staff);
const uniqstaff=[...new Set(staff)];

console.log(uniqStaff);
console.log(uniqstaff);

console.log(new Set(["waiter","chef","waiter","manager","chef"]).size);
console.log(new Set("sbajbi").size);


   
