///This math.random gives us number between 0 and 1 
///check will either be 1 or 0
let check= Math.floor(Math.random()*10)%2;
///if check is 0 then heaads
if(check==0)
{
    console.log("Heads");
}
///if check is 1 then tails
{
    console.log("Tails");
}
