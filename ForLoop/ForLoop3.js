///console read write module is requires for taking input from the user
io= require('console-read-write');
///we are declaring the function as async 
///if func is not async then we will have to give all the inputs at the begining together
///the function wont take the input when it is called
///Async makes the func wait for input user
async function PrimeFunction()
{
    console.log("enter the number to check prime")
    let n =  await io.read(parseInt());
    let flag=0;   
    for(let i=2;i<=Math.ceil(n/2);i++)
    {
        if (n % i == 0) 
        {
            flag = 1;
            break;
        }
    }
    if(n==1)
    {
        console.log("number is neither prime nor composite");
    }
    else
    {
        if(flag==1)
        console.log("The number is not prime");
        else
        console.log("The number is prime");
    }   
}
PrimeFunction();