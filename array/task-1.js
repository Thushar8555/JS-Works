var arr=[-1,0,-1,0,0,-1,0,0,-1]
        //0 1  2 3 4  5 6 7  8

        var output=[]

        for(let n of arr){
            if(n<0){
                output.unshift(-1)
            }
            else{
                output.push(0)
            }
        }
        console.log(output);
        