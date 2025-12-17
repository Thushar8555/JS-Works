var number = 6 // number = 8
var sum = 0 // sum = 0
for(let i = 1;i<number;i++){ // i=1 i=2 i=3
    if(number%i==0){ // 8%1==0=t 8%2==0=t 8%3==0=t
        sum = sum+i // sum=0+1=1 sum=1+2=3 sum=3+4=7
        

    }
}
console.log(sum==number?"perfect":"not perfect");
