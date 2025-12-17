var number = 123
var sum = 0
while(number!=0){           // 123   12        1   0 
    let digit = number%10  //  3      2        1
    sum = sum+digit       //  0+3=3   3+2=5    5+1=6
    number = Math.floor(number/10) //12 , 1   ,  0
    
}
console.log(sum);
