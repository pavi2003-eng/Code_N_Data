let row=prompt("Enter Number of rows:")
for(let i=row;i>=0;i--){
    let pattern=""
    for(let j=0;j<=i;j++){
        pattern+="* "
    }
    console.log(pattern)
}