function cube(num){
    return num**3
}
console.log(cube(2));
console.log(cube(7));

function odd(num){
    if(num%2!=0){
        return true
        
    }
    else{
        return false
        
    }
    

}
console.log(odd(3));


function numberchek(num){
        if(num==0){
            return "zero number"
            
        }
        else if(num>0){
            return "+ve number"

        }
        else{
            return "-ve number"
        }
}
console.log(numberchek(0));
