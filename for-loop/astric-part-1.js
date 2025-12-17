var pattern =""
for(let r=1;r<=3;r++){
    let pattern=""
    for(let col=1;col<=4;col++){

        if(col%2==0){
            pattern+="E "
        }
        else{
            pattern+="O "
        }            
        
        
    }
    console.log(pattern);
    
}