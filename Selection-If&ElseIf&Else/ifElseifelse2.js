///require function is used to include all the packages in separate files
///fs is resposible for synchronous and non sync operations
fs= require("fs");
///defining module process for taking input from the user
io= require('process');
console.log("please enter a number to find weekday");
///taking numerical input and convert it to respective day 
let input= process.argv[2];
///if else for input number
if(input==0)
{
    console.log("Sunday");
}
else if(input==1)
{
    console.log("Monday");
}
else if(input==2)
{
    console.log("Tuesday");
}
else if(input==3)
{
    console.log("Wednesday");
}
else if(input==4)
{
    console.log("Thrusday");
}
else if(input==5)
{
    console.log("Friday");
}
else if(input==6)
{
    console.log("Saturday");
}
else
{
    console.log("wrong input");
}