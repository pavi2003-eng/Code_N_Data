let row=prompt("Enter Number of rows:")
for(let i=0;i<=row;i++){
    let pattern=""
    for(let j=0;j<=row;j++){
       (i==j)||(i+j==row) ? pattern+="*" : pattern+=" "
    }
    console.log(pattern)
}