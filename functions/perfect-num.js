function perfect(num){
    let sum = 0
    for(let i=1;i<num;i++){
        if(num%i==0){
            sum = sum+i
        }
    }
    return sum == num
}
console.log(perfect(10));
