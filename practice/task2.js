const gameEvents = new Map([
    [17, 'goal'],
    [36, 'subtitution'],
    [47, 'goal'],
    [61, 'subtitution'],
    [64, 'yellow card'],
    [69, 'red card'],
    [70, 'subtitution'],
    [72, 'subtitution'],
    [76, 'goal'],
    [80, 'goal'],
    [92, 'yellow card']

])
// console.log(gameEvents);
//1
const events=[...new Set(gameEvents.values())]
// console.log(events);

//2
gameEvents.delete(64);
// console.log(gameEvents);

//3
console.log(`an event happened ,on average, every ${90/gameEvents.size} minutes`);
const time=[...gameEvents.keys()].pop();
console.log(time);
console.log(`an event happened ,on average, every ${time/gameEvents.size} minutes`);

//4
for(const [key,value] of gameEvents){
    const half=key<=45?'FIRST':'SECOND';
    console.log(`${half} HALF ${key}: ${value}`);
    }