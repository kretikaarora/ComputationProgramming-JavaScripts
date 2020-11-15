///console read write module is requires for taking input from the user
io= require('console-read-write');
///we are declaring the function as async 
///if func is not async then we will have to give all the inputs at the begining together
///the function wont take the input when it is called
///Async makes the func wait for input user
async function CorrectDate()
{  
    ///if user enters between march 20 and june 20 then correctdate 
   console.log("enter the month ");
   let month= await io.read();
    console.log("Please enter the day");
    ///converting number to int
    let day=  await io.read(parseInt());
    //checking for months between march and june
    if(month.toLowerCase() =='march' || month.toLowerCase() =='april' || month.toLowerCase() =='may' || month.toLowerCase() =='june' )
    {
        //checking for days condition
        if(day>=1 && day<=20)
        {
            console.log('correct date');
        }
        else
        {
            console.log('incorrect date');
        }
    }
    else
        console.log('month is incorrect');
}
CorrectDate();