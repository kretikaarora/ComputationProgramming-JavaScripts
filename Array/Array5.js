{
var number = new Array();
for(let n=1;n<100;n++)
{
    let arrayOfDigits=new Array();
    let t = n;
    while(t>0)
    {
        let mod=t%10;
        mod= mod.toString();
        arrayOfDigits.push(mod);       
        t=Math.floor(t/10);
    }   
        if (arrayOfDigits[0]==arrayOfDigits[1])
        {
                number.push(n);
        }
}
console.log(number);
}



