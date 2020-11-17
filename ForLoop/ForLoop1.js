///console read write module is requires for taking input from the user
io= require('console-read-write');
///we are declaring the function as async 
///if func is not async then we will have to give all the inputs at the begining together
///the function wont take the input when it is called
///Async makes the func wait for input user
async function PowerFunction()
{
    console.log("enter the value till you want the power of two to be printed")
    let n =  await io.read(parseInt());
    console.log("powers of two till : "+n)
    for(let i=0;i<=n;i++)
    {
        let variable = Math.pow(2, i);
        console.log(variable);
        
    }
}
PowerFunction();