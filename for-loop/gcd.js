var num1 = 5;
var num2 = 10;
var gcd = 1
var minnumber = num1 < num2 ? num1 : num2
for (let i = 1; i <= minnumber; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
        gcd = i
    }
}
console.log(gcd);
