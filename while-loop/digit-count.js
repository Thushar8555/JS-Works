var number = 1234
var count = 0
while (number != 0) { // 1234!=0=T
    let digit = number % 10 // 1234%10=3 
    count++ // count=1
    number = Math.floor(number / 10) // 
}