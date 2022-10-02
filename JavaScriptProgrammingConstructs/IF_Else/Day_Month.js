const month=prompt("Enter any month");
const date=prompt("Enter any date");
if (month == "march" && date >= 20 && date < 31) console.log("True");
else if(month =="april" && date <= 30) console.log("True");
else if(month =="may" && date <= 31) console.log("True");
else if(month =="june" && date < 20) console.log("True");
else
{
    console.log("False");
}



