var number = 655
while (number != 0) { // 655!=0 65!=0 6!=0 0!=0=F
    let digit = number % 10 //  655%10=5 65%10=5  6%10=6
    console.log(digit); // 5 , 5 ,6 
    number = Math.floor(number / 10) // 65 , 6  , 0

}