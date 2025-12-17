var name = "aaaa bbb"
var concount = 0;
var vow = 0;
for (let ch of name) {
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
        vow++
    }
    else if(ch !=" "){
        concount++
    }

}
console.log(concount);
console.log(vow);

