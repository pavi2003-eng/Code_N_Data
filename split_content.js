let a = "IAmPavithraVijayarangan"
let alphabets = "ABCDEFGHIJKLMOPQRSTUVWXYZ"
let splitedcontent=""
for(let i = 0;i<a.length;i++)
{
    if(alphabets.includes (a[i]))
    {
        splitedcontent=splitedcontent+" "+a[i]
    }
    else
    {
        splitedcontent=splitedcontent+a[i]
    } 
}
console.log(splitedcontent)