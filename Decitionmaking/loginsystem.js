var dbpassword ="password@123" 
var dbotp = 4548
var userpassword = "password@123"
var userotp = 454
if(dbpassword==userpassword){
    if (dbotp==userotp){
        console.log("SUCCESS");
        
    }
    else{
        console.log("INVALID");
        
    }
}
else{
    console.log("INVALID PASSWORD");
    
}