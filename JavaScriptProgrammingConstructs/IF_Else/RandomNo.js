const arr = new Array(5);
maximumValue = 0;
minimumValue = 1000;
for(let i = 1; i<= arr.length; i++)
{
    num = Math.floor(Math.random()*999);
    if(num >= 100)
    {
        console.log(i+". 3 Digit random Number is "+num)
        if(num>maximumValue)
            maximumValue = num;
        if(num<minimumValue)
            minimumValue = num;
    }
}
console.log("Minimum 3 digit number is "+minimumValue);
console.log("Maximum 3 digit number is "+maximumValue);
