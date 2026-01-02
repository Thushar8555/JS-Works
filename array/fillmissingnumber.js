// find the missing value inside array

//var arr=[1,2,4,5,6]
//var left=0
//var right=1
//while(left<arr.length-1){
//    let diffrents= arr[right]-arr[left]
//    if(diffrents!=1){
//        console.log(`${arr[left]+1} is missing`);
//        break
//        
//    }
//    left=right
//    right++
//}

// display duplicate number

var arr=[10,11,12,12,,13,14,15,15]
var left=0
var right=1
while(left<arr.length-1){
    let diffrents=arr[right]-arr[left]
    if(diffrents==0){
        console.log(`${arr[left]} is duplicate`);
    } 
    left++
    right++    
}

