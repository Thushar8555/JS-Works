// common divisors of two numbers num1 , num2

var num1 = 30;
var num2 = 50;
var min = 0;
if(num1>num2){
    min=num2
} 
else{
    min=num1
}

var i = 0;
while(i<=min){

    if(num1%i==0 && num2%i==0 ){
        console.log(i);
        
    }
    i++
}