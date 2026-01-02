var fruits={
    apple:250,
    orange:100,
    mango:120,
    cherry:220,
    guava:90,
    banana:70,
}

// display price >100
//for(let [k,v] of Object.entries(fruits)){
//    if(v>=100){
//        console.log(k,v);
//        
//    }
//}

//product avilable range of 50 to 150
//for(let [k,v] of Object.entries(fruits)){
//    if(v>=50 && v<=150){
//        console.log(k,v);
//        
//    }
//}

// display costly product 
var costlyproduct=Object.entries(fruits).reduce((it1,it2)=>it1[1]>it2[1]?it1:it2)
console.log(costlyproduct);

// display cheap product
var cheapproduct=Object.entries(fruits).reduce((it1,it2)=>it1[1]<it2[1]?it1:it2)
console.log(cheapproduct);
