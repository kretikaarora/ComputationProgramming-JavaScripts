//checking if the year is leap year or not.
console.log("Please enter the  Year for checking ");
///we need to install npm package for process
io = require('process');
//taking year input from the user
let year=process.argv[2];
//if year is divisible by 400,then leap year
if(year%400==0)
{
    console.log(year+" is a leap year");
}
//if year is divisible by 100 and not by 400, then it is not leap year
else if(year%100==0)
{
    console.log(year+" is not a leap year");
}
//if year is divisible by 4, then it is leap year
else if(year%4==0)
{
    console.log(year+" is a leap year");
}
//else it is not leap year.
else
{
    console.log(year+" is not a leap year");
}