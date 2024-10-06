const currentDate = new Date('January 24, 2023, 12:00:00');
const sameDate = new Date();
sameDate.setTime(currentDate.getTime());
console.log(sameDate);