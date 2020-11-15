const { Console } = require('console');

///console read write module is requires for taking input from the user
io= require('console-read-write');
///we are declaring the function as async 
///if func is not async then we will have to give all the inputs at the begining together
///the function wont take the input when it is called
///Async makes the func wait for input user
async function MaxAndMin()
{
///reading the numbers for user
console.log("please enter the 1st  three digit number ");
let firstNo= await io.read(parseInt());
console.log("please enter the 2nd  three digit number");
let secondNo= await io.read(parseInt());
console.log("please enter the 3rd  three digit number");
let thirdNo=await io.read(parseInt());
///operations on these numbers
resultOne= firstNo+secondNo*thirdNo;
resultTwo= firstNo+secondNo/thirdNo;
resultThree= firstNo%secondNo+thirdNo;
resultFour= firstNo*secondNo+thirdNo;
console.log("result one : "+resultOne);
console.log("result two : "+resultTwo)
console.log("result three : "+resultThree);
console.log("result four : "+resultFour)
///maximum value
if(firstNo>=secondNo & firstNo>=thirdNo)
    console.log("maximum number is :  "+firstNo);
else if(secondNo>=firstNo & secondNo>=thirdNo)
    console.log("maximum number is : "+secondNo);
else
    console.log("maximum number is :  "+thirdNo);
///minimum value    
if(firstNo<=secondNo & firstNo<=thirdNo)
    console.log("min number is : "+firstNo);
else if(secondNo<=firstNo & secondNo<=thirdNo)
    console.log("min number is : "+secondNo);
else
    console.log("min number is : "+thirdNo);
}
MaxAndMin();