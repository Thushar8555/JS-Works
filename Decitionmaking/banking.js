var dbpin = 2025 
var dbbal = 50000
var userpin = 2025
var amount = 58000

if(dbpin==userpin){
    if(dbbal>=amount){
        console.log("WITHDRAW SUCCESSFUL");
        
    }
    else{
        console.log("INSUFFICIENT BALANCE");
        
    }
}
else{
  console.log("INCORRECT PIN");
    
}