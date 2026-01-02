
var football={
    brazil:5,
    portugal:0,
    england:1,
    germany:4,
    argentina:3,
    urugay:2,
    espain:1,
    italy:4,
    france:2,

}
for(let k of Object.keys(football))
    console.log(k);

for(let v of Object.values(football))
    console.log(v);

for(let item of Object.entries(football))
    console.log(item);

for(let item of Object.entries(football)){
    console.log(item[0]);
    console.log(item[1]);
}
    
    
    
    