

function ispalindrome(text){
    let ispword=true
    let result=""
    for(let i=text.length-1;i>=0;i--){
        result+=text[i]
    }
    if(result!=text){
        ispword=false
    }

    return result==text
}
console.log(ispalindrome("malayala"));
