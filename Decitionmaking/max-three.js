var num1 = 8 // input
var num2 = 2 // input
var num3 = 31 // input
if(num1>num2 && num1>num3){ // num1>num2 && num1>num3
    console.log(`${num1} is Largest`); // print num1 largest
    
}
else if(num2>num1 && num2>num3){ // num2>num1 && num2>num3
    console.log(`${num2} is Largest`); // print num2 largest
    
}
else if(num3>num1 && num3>num2){ // chk num3>num1 && num3>num2
    console.log(`${num3} is Largest`); // print num3 largest
    
}
else{
    console.log("INVALID"); 
    
}