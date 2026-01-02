
var expenses={
    prabinav:560,
    venkitesh:650,
    roshan:120,
    goutham:340,
    thushar:670,
    arun:67,
    jazeel:480,
    nazim:340,
    yadhu:0,
    amal:0,
    catherin:0,
    reshmi:0,
    sreelakshmi:0
}
// unpaid
var unpaid=Object.entries(expenses).filter(s=>s[1]==0)
console.log(unpaid);
// paid
var paid=Object.entries(expenses).filter(s=>s[1]>0)
console.log(paid);
// paid > 250
var paid250=Object.entries(expenses).filter(s=>s[1]>250)
console.log(paid250);
// total expence
var total=Object.entries(expenses).reduce((sum,e)=>sum+e[1],0)
console.log(total);
// individual split
var split= Math.round(total/Object.entries(expenses).length)
console.log(split);

var splitwise={}

for(let [k,v] of Object.entries(expenses)){
    splitwise[k]=split-v

}
console.log(splitwise);


