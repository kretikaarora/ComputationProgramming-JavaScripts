///console read write module is requires for taking input from the user
io= require('console-read-write');
///we are declaring the function as async 
///if func is not async then we will have to give all the inputs at the begining together
///the function wont take the input when it is called
///Async makes the func wait for input user
async function FactorialFunction()
{
    console.log("enter the number to find factorial");
    let n =  await io.read(parseInt());
    let fact=1;
    for(let i=1;i<=n;i++)
    {
           fact=i*fact;
    }
    console.log("fact is : " + fact);
}
FactorialFunction();