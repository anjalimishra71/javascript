const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    // ES6 enhanced object literals
    openingHours,
  
    order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
}
if (restaurant.openingHours && restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);
  

 // WITH optional chaining
//   console.log(restaurant.openingHours.mon?.open);
//   console.log(restaurant.openingHours?.mon?.open??"not present");
  
  // Example
     const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  
  for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
//    console.log(`On ${day}, we open at ${open}`);
  }
  
  // Methods
//   console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
//   console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
  
  // Arrays
//   const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
  // const users = [];
  
//   console.log(users[0]?.name ?? 'User array empty');

// object-keys

const properties=Object.keys(openingHours);
console.log(properties);

let str=`we are open at ${properties.length} days `
for(const day of properties){
    str+=`${day}, ` ;
}
// console.log(str);

//property value
const value=Object.values(openingHours);
console.log(value);

//entries
const entries=Object.entries(openingHours);
for(const [key,{open,close}] of entries){
    console.log(`on ${key} ,open at ${open} and close at ${close}`);
}