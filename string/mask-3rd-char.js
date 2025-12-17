

var word = "ABC123"
        //  012345
var challengecode ="7YZ"
                 // 678
var result = word.concat(challengecode)
//console.log(result);
var maskstr=""
var count = 1;
for(let i=0;i<=result.length-1;i++){
    if(count==3){
        maskstr+="X"
        count=0
    }
    else{
        maskstr+=result[i]
    }
    count++
}
console.log(maskstr);





