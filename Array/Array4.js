const { Console } = require('console');
///console read write module is requires for taking input from the user
io= require('console-read-write');
//declaring an array for inputing all values
var checkingTriplets=new Array(1,2,-1,-2,0);
///we are declaring the function as async 
///if func is not async then we will have to give all the inputs at the begining together
///the function wont take the input when it is called
///Async makes the func wait for input user
async function InputFunction()
{
    let found=false;
    for(let i=0;i<checkingTriplets.length-2;i++)
    {
        for(let j=i+1;j<=checkingTriplets.length-1;j++)
        {
            for(let k=j+1;k<=checkingTriplets.length;k++)
            {
                if(parseInt(checkingTriplets[i])+parseInt(checkingTriplets[j])+parseInt(checkingTriplets[k])==0)
                {
                    console.log("these are the triplets :  "+checkingTriplets[i]+","+checkingTriplets[j]+","+checkingTriplets[k]);
                    found=true;
                }
            }
        }
    }
    if(!found)
    {
        console.log("no triplet found");
    }
}
InputFunction();