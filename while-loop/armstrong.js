var number = 8208
var numbercopy = number
var original = number
var digitcount = 0
var sum = 0
while (number != 0) {
    digitcount++
    number = Math.floor(number / 10)

}
//console.log(digitcount);

while (numbercopy != 0) {
    let digit = numbercopy % 10
    let exponenet = digit ** digitcount
    sum = sum + exponenet
    numbercopy = Math.floor(numbercopy / 10)
}
console.log(sum);
console.log(sum==original?"armstrong number":"not armstrong number");

