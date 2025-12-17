// min number
// max number
// sum of number
// sum of odd number
// divisor of 3
// avg of number
// most frequent number

var number = [2, 3, 4, 5, 6, 7, 7, 8, 3, 9, 9, 7]
//0 1 2 3 4 5 6 7 8 9 0 1
var total = 0;

// min number

console.log("minimum number");

var minnumber = number[0]
for (let m of number) {
    if (m < minnumber)
        minnumber = m
}
console.log(`minnumber = ${minnumber}`);

// max number


console.log("max number");

var maxnum = number[0]
for (let m of number) {
    if (m > maxnum) {
        maxnum = m

    }
}
console.log(`maxnumber = ${maxnum}`);


// sum of number


console.log("sum of numbers");

var sumnumber = number[0]
var sum = 0;
for (let i = 0; i < number.length; i++) {
    sum = sum + i

}
console.log(`sum of numbers = ${sum}`);

// sum of odd numbers

console.log("sum of odd number");


const numbers = [2, 3, 4, 5, 6, 7, 7, 8, 3, 9, 9, 7];
let oddSum = 0;

for (const number of numbers) {
    if (number % 2 !== 0) {
        oddSum += number;
    }
}

console.log(`sum of odd number = ${oddSum}`);;


// sum of even numbers 

console.log("sum of even number");


const numbr = [2, 3, 4, 5, 6, 7, 7, 8, 3, 9, 9, 7];
let evenSum = 0;
for (const num of numbr) {
    if (num % 2 == 0) {
        evenSum += num
    }
}
console.log(`sum of even number = ${evenSum}`);


// divisor 0f 3

console.log("divisor of three");


const numb = [2, 3, 4, 5, 6, 7, 7, 8, 3, 9, 9, 7];
for (const d of numb) {
    if (d % 3 == 0) {
        console.log(d);


    }
}

// avg of number

console.log("avg of number");

const arrr = [2, 3, 4, 5, 6, 7, 7, 8, 3, 9, 9, 7];
let sumavg = 0;
for(let i=0;i<arrr.length;i++){
    sumavg+=arrr[i]

}
const avg = sumavg/arrr.length
console.log(`avg of number = ${avg}`);

// most frequent number

console.log("most frequent number");

const num = [2, 3, 4, 5, 6, 7, 7, 8, 3, 9, 9, 7];

const frequency = {};
num.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
});

let maxCount = 0;
let mostFrequent;
for (let num in frequency) {
    if (frequency[num] > maxCount) {
        maxCount = frequency[num];
        mostFrequent = num;
    }
}

console.log(`Most frequent number: ${mostFrequent} (appears ${maxCount} times)`);
















