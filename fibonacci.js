n=100
let arr=[]
count=0
for(let i=0;i<=n;i++){
    if(i==0||i==1)
    {
        arr.push(i)
    }
    else{
        let series=arr[i-1]+arr[i-2]
        if(series<n){
            arr.push(series)
        }
    }
}
console.log(arr)
