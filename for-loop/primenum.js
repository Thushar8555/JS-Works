var number =7;
var isprime = true
for(let i = 2;i<number;i++){
    if(number%i==0){
        isprime = false
        break
    }
}
console.log(isprime?" prime number":"not a prime number");
