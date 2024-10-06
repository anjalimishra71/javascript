const game={
  team1: 'Bayern Munich',
  team2:'Borrussia Dortmund',
  players:[
    [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
    ],
    [
        'Burki',
        'Schulza',
        'hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze'
    ],
  ],
  score:'4:0',
  scored:['Lewandowski','Gnarby','Lewandowski','Hummels'],
  date:'Nov 9th, 2037',
  odds:{
    team1:1.33,
    x:3.25,
    team2:6.5,
  },

};
//1
const [player1,player2]=game.players;
// console.log(player1)
// console.log(player2)

//2
const [gk,...fieldPlayers]=player1;
// console.log(gk);
// console.log(fieldPlayers)

//3
const allPlayers=[...player1,...player2]
// console.log(allPlayers)

//4
const players1final=[...player1,'Thiago','Coutinho','Perisic']
// console.log(players1final)

//5
const {
    odds:{team1,x:draw,team2}
}=game
console.log(team1,draw,team2)

//6
function printGoals(...players){
    console.log(`${players.length} players were scored..`)
}
printGoals( 'Neuer',
    'Pavard',
    'Martinez')
printGoals('Burki',
        'Schulza')

//7
// team1>team2 && console.log(`team 1 is more likely to win`)
// team1<team2 && console.log(`team 2 is more likely to win`)  


//task2
//1
const entries=Object.entries(game.scored);
for(const [key,value] of entries){
  // console.log(`Goal ${key} : ${value}`);
}
//2
const value=Object.values(game.odds);
let sum=0;
for(let v of value){
sum+=v;
}
console.log(sum/value.length)

//3
for(const [team,odd] of Object.entries(game.odds)){
const str=team==='x'?"draw":`victory ${game[team]}`;
  console.log(`odd of ${str} :${odd}`)
}