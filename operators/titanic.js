var malePassenger = 869;
var femalePassenger = 412;
var survived = 492;
var Total = malePassenger + femalePassenger
var death = 789;

console.log(`Total number of passangers:${malePassenger + femalePassenger}`);
console.log(`Total number of death:${malePassenger + femalePassenger - survived}`);

var persentageSurvived = (survived/Total)*100
console.log(`percentage survived:${persentageSurvived}`);

var percentageDeath = (death/Total)*100
console.log(`percentage death:${percentageDeath}`);



