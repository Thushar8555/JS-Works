// w.a.p to display sum of even number upto limit

var limit = 10
var sum = 0
var i = 1
while (i <= limit) { //  1 , 2 , 3 ,4 , 5
    if (i % 2 == 0) { // f   t   f  t   f
        sum = sum + i // sum 2      6
    }
    i++ // i=2
}
console.log(sum);
