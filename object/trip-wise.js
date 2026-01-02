
var expenses={
    nazin:680,
    jazeel:780,
    thushar:1500,
    mahin:500,
    arun:1000,
    amal:750,

}
var total=0
for(let key in expenses){
     total+=expenses[key]
}
console.log(total);

var maxcount=0;
for(let key in expenses){
     var currentexpence=expenses[key]
     if(currentexpence>maxcount){
        maxcount=currentexpence
     }
}
//console.log(maxcount);

for(let key in expenses){
    let currentexpence=expenses[key]
    if(currentexpence==maxcount){
        console.log(key,currentexpence);
        
    }

}


var split=total/Object.entries(expenses).length
console.log(split);

var splitwise={}
   for(let user in expenses){
    let amount=expenses[user]
    splitwise[user]=split-amount
   }
console.log(splitwise);
