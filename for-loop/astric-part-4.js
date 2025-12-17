for(let r=1;r<=4;r++){
   let pattern=""
    for(let c=1;c<=4;c++){
        if(c==r || c+r==5){
            pattern+="1 "
        }
        else{
            pattern+="O "
        }
    }
    console.log(pattern);
    
}