// w.a. fuction isprime(num) return true if number is prime return false

function isprime(num) {
    let primenumber = true
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primenumber = false
            break

        }

    }
    return primenumber
}
console.log(isprime(8));
console.log(isprime(9));
console.log(isprime(3));


