function displayUnit(digit)
{
    if( digit == 1) console.log("One");
    else if( digit == 10) console.log("Ten");
    else if( digit == 100) console.log("Hundred");
    else if( digit == 1000) console.log("Thousand");
    else if( digit == 10000) console.log("Ten Thousand");
    else if( digit == 100000) console.log("Hundred Thousand");
    else if( digit == 1000000) console.log("Million");
    else if( digit == 10000000) console.log("Ten Million");
    else if( digit == 100000000) console.log("Hundred Million");
    else if( digit == 1000000000) console.log("Billion");
        else console.log("Invalid Input");
}
const digit = prompt("Enter a digit between 1 to 10^8 : ");
displayUnit((digit));