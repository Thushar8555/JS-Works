

var expenses =[100,200,300,400,500,600,700,800,900]
           //   0    1   2   3   4   5   6   7   8   

           var total =0;

           console.log(`iterating array using index`);
for(let i=0;i<expenses.length;i++){
    console.log(expenses[i]);
    
}  

console.log(`iterating array using of`);

for(let e of expenses){
    console.log(e);
    
}

// total exp

console.log("total expense");


for(let e of expenses){
    total+=e
}
console.log("total exp=",total);

console.log("highest expense");

var maxexp=0;
for(let e of expenses){
    if(e>maxexp){
        maxexp=e
    }
}
console.log("high exp =",maxexp);

console.log("min exp");

var minexp = expenses[0]
for(let e of expenses){
    if(e<minexp){
        minexp=e
    }
}
console.log("min exp",minexp);






