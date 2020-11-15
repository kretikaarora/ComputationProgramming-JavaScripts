///Sequence Practice 

///1. Getting a Single Digit Number
console.log("Single Digit Number : "+Math.floor(Math.random() * 10));
///2. Random Number to get a dice digit between 1 to 6 
console.log("Dice Number : "+Math.floor(Math.random() * 10)%6 +1);
///3. Adding two random dice digit
let firstDiceNumber=Math.floor(Math.random() * 10)%6 +1;
let secondDiceNumber=Math.floor(Math.random() * 10)%6 +1;
let sum = firstDiceNumber+secondDiceNumber;
console.log("sum of two dice is : "+sum);
///4. Average Of Five Numbers
io=require('process');
let numberOne = process.argv[2];
let numberTwo = process.argv[3];
let numberThree = process.argv[4];
let numberFour= process.argv[5];
let numberFive = process.argv[6];
let avg = (parseInt(numberOne)+parseInt(numberTwo)+parseInt(numberThree)+parseInt(numberFive)+parseInt(numberFour))/5;
console.log("Average of five numbers is : "+avg);
///5. Unit Conversion
///5.a Inch to feet 
const FEET_IN_INCH = 12;
let conversionRatio = (1/FEET_IN_INCH);
let numberOfInch = 42;
/// Converting the units using the unitary principle
let numberOfFeet = conversionRatio * numberOfInch;
console.log("Number of feet = " + numberOfFeet);
///5.b Regaular plot 60ft X 40 ft into meters
let areaInFeet=2400;
const FEETSQ_TO_METERSQ = 0.3048*0.3048 ;
let areaInMeters= parseInt(areaInFeet*FEETSQ_TO_METERSQ);
console.log("area in meters = "+areaInMeters);
///5.c Area of 25 such plots
areaInMeters= parseInt(areaInFeet*FEETSQ_TO_METERSQ*25);
console.log("area in meters  for 25 plots = "+areaInMeters);
