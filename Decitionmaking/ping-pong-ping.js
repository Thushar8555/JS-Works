var num = 4 ; // input
if(num%15==0){ // 15%15==0 
    console.log(`${num} is PINGPONG`); // print Pingpong T
    
}
else if(num%5==0){
    console.log(`${num} is PONG`);
    
}
else if(num%3==0){
    console.log(`${num} is PING`); //4%3==0 false
    
}
else{
    console.log("INVALID"); // print INVALID
    
}