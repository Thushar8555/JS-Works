let numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];

//Create a new array containing the square of each number

var square=numbers.map(num=>num**2)
//console.log(square);

//Create a new array containing numbers less than 10

var less=numbers.filter(num=>num<10)
//console.log(less);

//Find the average of all numbers

var avg=numbers.reduce((n1,n2)=>n1+n2)
//console.log(avg/numbers.length);

//Find the smallest number in the array

var smallest=numbers.reduce((n1,n2)=>n1<n2?n1:n2)
//console.log(smallest);

//Create a new array containing only odd numbers

var odd=numbers.filter(num=>num%2==1)
//console.log(odd);


//Sort the array and display the third smallest number
//var sort=numbers.sort((n1,n2)=>n1-n2)
//console.log(sort[2]);

//Create a new array by subtracting 2 from each number

var sub=numbers.map(num=>num-2)
console.log(sub);

