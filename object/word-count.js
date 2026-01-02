
var text ="this is a javascript program this javascript program is simple"
var word=text.split(" ")
var wordcount={}
for(let w of word){
    if(w in wordcount){
        wordcount[w]+=1
    }
    else{
        wordcount[w]=1
    }
}
console.log(wordcount);
