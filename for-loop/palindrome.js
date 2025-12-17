var text ="amanaplanacacanalpanama"
var stringlength=text.length-1
var result=""
for(let i = stringlength;i>=0;i--){
    result=result+text[i]


}
console.log(result==text?"palindrome":"not a palindrome");
