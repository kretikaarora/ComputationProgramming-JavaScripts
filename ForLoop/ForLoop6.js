///console read write module is requires for taking input from the user
io= require('console-read-write');
///we are declaring the function as async 
///if func is not async then we will have to give all the inputs at the begining together
///the function wont take the input when it is called
///Async makes the func wait for input user
async function InputFunction()
{
    console.log("Please enter the  number ");
    //taking input range from the user
    let n= await io.read();
    for(let i=1;i<n;i++)
    {
        if(n%i==0)
        {
            PrimeFunction(i);
        }       
    }
}
async function PrimeFunction(n)
{  
    let flag=false;
        for(let i=2;i<=Math.ceil(n/2);i++)
        {   
            if (n%i==0) 
            {
              flag=true; 
              break;                
            }
        }
        if(!flag&& n!=1)
        {
            console.log(n);
        }
}
InputFunction();
