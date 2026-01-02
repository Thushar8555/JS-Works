
var color=["red","blue","white","black","red","pink","white"]
var colorcount={}
for(let c of color){
    if(c in colorcount){
        colorcount[c]+=1
    }
    else{
        colorcount[c]=1
    }
}
console.log(colorcount);
