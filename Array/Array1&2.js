///generating 3 digit numbers and adding numbers to an array 
var randomNumbers= new Array();
for(var i =0;i<10;i++)
{
    let num=Math.floor(Math.random() *900+100 );
    console.log(num);
    randomNumbers[i]=num; 
}

///finding second max and second min without sorting
var secondMax= FindSecondMax();
console.log("second max :"+secondMax);
var secondMin= FindSecondMin();
console.log("second min :"+secondMin);
function FindSecondMax()
{
    var max = Math.max(...randomNumbers);
    ///spice can remove an element as well add an element using index
    ///index of max will be removes and only 1 element will be removed
    randomNumbers.splice(randomNumbers.indexOf(max), 1);
    return Math.max(...randomNumbers);
}
function FindSecondMin()
{
    var min = Math.min(...randomNumbers);
    randomNumbers.splice(randomNumbers.indexOf(min), 1);
    return Math.min(...randomNumbers);
}

//////finding second max and second min with sorting
var randomNumbersForSorting=new Array();
for(var j =0;j<10;j++)
{
    let num=Math.floor(Math.random() *900+100 );
    console.log(num);
    randomNumbers[j]=num; 
}
randomNumbersForSorting.sort();
console.log("second min after sorting"+randomNumbersForSorting[1]);
console.log("second max after sorting"+randomNumbersForSorting[8]);

