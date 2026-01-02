
var word=["carrot","parrot","beetroot","apple"]

// length
var wordlength=word.map(w=>w.length)
console.log(wordlength);

// uppercase

var uppercase=word.map(w=>w.toUpperCase())
console.log(uppercase);

// contain rr

var rr=word.filter(w=>w.includes("rr"))
console.log(rr);

// longest word

var long=word.reduce((w1,w2)=>w1.length>w2.length?w1:w2)
console.log(long);

// sort

word.sort((w1,w2)=> w1.length-w2.length)
console.log(sort);
