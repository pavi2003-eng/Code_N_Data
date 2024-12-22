let row=prompt("Enter Number of rows:")
for(let i=0;i<=row;i++){
    let pattern=""
    for(let j=0;j<=i;j++){
        pattern+=" "
    }
    for(let k=0;k<row-i;k++){
        pattern+="* "
    }
    console.log(pattern)
}