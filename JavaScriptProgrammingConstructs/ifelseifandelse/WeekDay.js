function getDay(number)
{
    if (number == 1) console.log("Monday");
    else if (number == 2) console.log("Tuesday");
    else if (number == 3) console.log("Wednesday");
    else if (number == 4) console.log("Thursday");
    else if (number == 5) console.log("Friday");
    else if (number == 6) console.log("Saturday");
    else if (number == 7) console.log("Sunday");
       else console.log("Invalid Number");
}
const number = prompt("Enter a no between 1-7 :");
getDay(number);

