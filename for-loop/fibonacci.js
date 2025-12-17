var limit = 10;
var prev = 0
var cur = 1
console.log(prev);
console.log(cur);


for(let i = 1;i<=limit-2;i++){
    let next = prev+cur
    prev = cur
    cur = next
    console.log(next);
    

}