
var vegitables={
    onion:35,
    potatto:20,
    brinjal:50,
    carrot:70,
    beans:100,
    chilly:120,
    ginger:120,
    
}
//for(let key in vegitables){
//     console.log(key,vegitables[key]);
//     
//}

maxprice=0;
for(let key in vegitables){
    var currentprice=vegitables[key]
    if(currentprice>maxprice){
        maxprice=currentprice
    }
}

for(let key in vegitables){
    let currentprice=vegitables[key]
    if(maxprice==currentprice){
        console.log(key,currentprice);
        
    }
}