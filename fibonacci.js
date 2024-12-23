console.log("----Fibonacci Series within n----")
n=100
let arr=[]
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

console.log("----Fibonacci Series upto n----")
let arr1=[]
for(let i=0;i<=n;i++){
    if(i==0||i==1)
    {
        arr1.push(i)
    }
    else{
        let series=arr1[i-1]+arr1[i-2]
        if(arr1.length<n){
            arr1.push(series)
        }
    }
}
console.log(arr1)
