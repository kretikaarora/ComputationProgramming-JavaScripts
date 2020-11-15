///console read write module is requires for taking input from the user
io= require('console-read-write');
///we are declaring the function as async 
///if func is not async then we will have to give all the inputs at the begining together
///the function wont take the input when it is called
///Async makes the func wait for input user
async function inputFunction()
{
    console.log("Please enter the first number for range");
    //taking input range from the user
    let n1= await io.read();
    console.log("please enter the last number for range");
    let n2= await io.read();
    if(n1<=n2)
    {
        //iterating over the range
        for(let i=n1;i<=n2;i++)
        {
            primeFunction(i);
        }
    }
    else
    {
        console.log("entered incorrect range");
    }
}

async function primeFunction(n)
{
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
        console.log(n+" is neither prime nor composite");
    }
    else
    {
        if(flag==1)
        console.log(n+ " is not prime");
        else
        console.log(n+" is prime");
    }   
}
inputFunction();
