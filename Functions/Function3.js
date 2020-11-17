const { Console } = require('console');

///console read write module is requires for taking input from the user
io= require('console-read-write');
///we are declaring the function as async 
///if func is not async then we will have to give all the inputs at the begining together
///the function wont take the input when it is called
///Async makes the func wait for input user
async function Input()
{
    console.log("enter the number to check palindrome")
    let n =  await io.read(parseInt());   
    let palindromeCheck=CheckPalindrome(n);
    console.log("palindrome Check:"+CheckPalindrome(n));
}
function CheckPalindrome(n)
{
    let temp=n;
    let reverseNumber=0;
  while(temp>0)
   {
      mod=temp%10;
      reverseNumber=(reverseNumber*10)+mod;
      temp=Math.floor(temp/10);      
   }
  if(n==reverseNumber)
  return true;
  else
  return false;
}
Input();