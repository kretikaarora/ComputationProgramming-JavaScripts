let monthMap = new Map();
for(let i=0;i<50;i++)
{
    var month = Math.floor(Math.random()*10)%12+1;
    if(!monthMap.has(month))
    {
        let arr = new Array();
        arr.push(i);
        monthMap.set(month,arr);
    }
    else
    {
        //let arr= new Array;
        arr=monthMap.get(month);
        arr.push(i);
        monthMap.set(month,arr);       
    }
}
///Birthdays by date 
console.log("Birthdays by date")
monthMap.forEach((value,key)=>
console.log(key+"->"+value.length));