let diceRollMap= new Map();
let numberOne=0;
let numberTwo=0;
let numberThree=0;
let numberFour=0;
let numberFive=0;
let numberSix=0;
while(numberOne<10&&numberTwo<10&&numberThree<10&&numberFour<10&&numberFive<10&&numberSix<10)
{
    let diceRoll=Math.floor(Math.random()*10)%6+1;
    switch(diceRoll)
    {
        case 1:
            numberOne++;
            diceRollMap.set(diceRoll,numberOne);
            break;
        case 2:
            numberTwo++;
            diceRollMap.set(diceRoll,numberTwo);
            break;
        case 3:
            numberThree++;
            diceRollMap.set(diceRoll,numberThree);
            break;   
        case 4:
            numberFour++;
            diceRollMap.set(diceRoll,numberFour);
            break;    
        case 5:
            numberFive++;
            diceRollMap.set(diceRoll,numberFive);
            break; 
        case 6:
            numberSix++;
            diceRollMap.set(diceRoll,numberSix);
            break;   
    }
}
 ///finding out minimum and the maximum times the dice was rolled
 console.log("the maximum value :"+Math.max(...diceRollMap.values()));
 console.log("the minimum value :"+Math.min(...diceRollMap.values()));
