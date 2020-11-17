const { Console } = require('console');

///console read write module is requires for taking input from the user
io= require('console-read-write');
///we are declaring the function as async 
///if func is not async then we will have to give all the inputs at the begining together
///the function wont take the input when it is called
///Async makes the func wait for input user
async function Input()
{
    console.log("enter the number to check prime")
    let n =  await io.read(parseInt());
    console.log("The number is : "+n);
    let checkPrime = PrimeCheck(n);
    console.log("prime check : "+checkPrime);
    let palindromeCheck=CheckPalindrome(n);
    console.log("palindrome Check:"+CheckPalindrome(n));
    if(checkPrime==palindromeCheck)
    {
        console.log("The number is prime and palindrome both")
    }
}

function PrimeCheck(n)
{
    
    let flag=true;   
    for(let i=2;i<=Math.ceil(n/2);i++)
    {
        if (n % i == 0) 
        {
            flag = false;
            break;
        }
    }
    if(n==1)
    {
        flag=false;
        console.log("number is neither prime nor composite");
        return flag;
        
    }
    else
    {
        if(flag)
        {
            console.log("The number is  prime");
            return flag;
        }      
        else
        {
            console.log("The number is not prime");
            return flag;
        }
       
    }   
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