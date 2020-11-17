io= require('console-read-write');
//declaring an array for inputing all values
var primeFactors=new Array();
///we are declaring the function as async 
///if func is not async then we will have to give all the inputs at the begining together
///the function wont take the input when it is called
///Async makes the func wait for input user
async function Input1Function()
{
    ///asking user for type of conversion
    console.log("Press 1 for converting farheniet to celcius");
    console.log("Press 2 for converting celcius to farheniet");

    let choice = parseInt(await io.read());
    switch(choice)
    {
        case 1:
            FarehnietToCelcius();
            break;
        case 2:
            CelciusTofarehniet();
            break;
        default:
            console.log("wrong input");
            break;
    }
}
async function FarehnietToCelcius()
{
    console.log("Please enter farehniets temperature to convert to celcius temperature");
    console.log("temp should be greater than 32 and less than 212");
    let farehnietsTemp= parseInt(await io.read());
    if(farehnietsTemp>=32 && farehnietsTemp<=212 )
    {
    let celciusTemp= (farehnietsTemp-32)*(5/9);
    console.log("celcius temperature after conversion: "+celciusTemp);
    }
    else
    {
        console.log("not correct farehniet temperature ");
    }
}
async function CelciusTofarehniet()
{
    console.log("Please enter celcius temperature to convert it to farheneit temperature");
    console.log("temp should be greater than 0 and less than 100");
    let celciusTemp= parseInt(await io.read());
    if(celciusTemp>=0 && celciusTemp<=100 )
    {
    let farehnietsTemp= (celciusTemp*(9/5))+32;
    console.log("farehneit temperature after conversion: "+farehnietsTemp);
    }
    else
    {
        console.log("not correct farehniet temperature");
    }
}
InputFunction();