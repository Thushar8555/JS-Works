var dbpin = 2025
var dbbal = 78000
var userpin = 2025
var useramount = 52001

if(dbpin==userpin){

    if(useramount%100==0 ){
        if(dbbal>useramount){
            console.log("WITHDRAW SUCCESSFULLY");
            
        }
        else{
            console.log("NO BAL");
            
        }

}
else{
    console.log("ENTER MULTIPLE OF 100");
    
}

}
else{
    console.log("INCORRECT PIN");
    
}
