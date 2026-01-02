
var arr=[1,2,3,4,5,6,7]
var target = 10
var left =0
var right =arr.length-1
while(left<right){
    let currentsum=arr[left]+arr[right]
    if(currentsum==target){
        console.log(`${arr[left]},${arr[right]}`);
        break
        
    }
    else if(currentsum<target){
        left++
    }
    else{
        right++
    }
        
    
}