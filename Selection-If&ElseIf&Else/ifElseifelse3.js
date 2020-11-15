///require function is used to include all the packages in separate files
///fs is resposible for synchronous and non sync operations
fs= require("fs");
///defining module process for taking input from the user
io= require('process');
///input from the user
inputNumber=  process.argv[2];
///Printing the digit at each position
let digitPlace=0;
while(inputNumber>0)
{
    ///this will give us the which digit it is
    digitPlace+=1;
    ///mod gives us the digit at that position
    let mod= input%10;
    ///innput is changed now
    input= Math.floor(input/10);
    console.log('Digit at '+digitPlace+' position is: '+mod);
}