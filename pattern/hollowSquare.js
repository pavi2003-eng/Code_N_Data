let row=prompt("Enter Number of rows:")
let column=prompt("Enter Number of columns:")
for(let i=0;i<=row;i++){
    let pattern=""
    for(let j=0;j<=column;j++){
       (i==0)||(j==0)||(i==row)||(j==column) ? pattern+="*" : pattern+=" "
    }
    console.log(pattern)
}