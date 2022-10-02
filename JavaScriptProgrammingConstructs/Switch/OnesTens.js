function displayUnit(digit)
{
    switch(digit){
     case '1':
    console.log("One");
    break;
    case '10':
    console.log("Ten");                                        
    break;
    case '100':
    console.log("Hundred");
    break;
    case '1000':
    console.log("Thousand");
    break;
   case '10000':
    console.log("Ten Thousand");
    break;
   case '100000':
    console.log("Hundred Thousand");
    break;
    case '1000000':
    console.log("Million");
    case '10000000':
    console.log("Ten Million");    
    break;
    case '100000000':
        console.log("Hundred Million");
        case '1000000000':
        console.log("Billion");
    default: console.log("Invalid number");
}
}
const digit = prompt("Enter a digit between 1 to 10^8 : ");
displayUnit((digit));