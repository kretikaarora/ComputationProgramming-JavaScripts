///console read write module is requires for taking input from the user
io= require('console-read-write');
///we are declaring the function as async 
///if func is not async then we will have to give all the inputs at the begining together
///the function wont take the input when it is called
///Async makes the func wait for input user
async function HarmonicFunction()
{
    console.log("enter the value till where you want the harmonic number");
    let n =  await io.read(parseInt());
    let harmonicNumber=0;
    console.log("powers of two till : "+n)
    for(let i=0;i<=n;i++)
    {
         harmonicNumber += 1/i;      
    }
    console.log("Harmonic Number : " +HarmonicNumber);
}
HarmonicFunction();