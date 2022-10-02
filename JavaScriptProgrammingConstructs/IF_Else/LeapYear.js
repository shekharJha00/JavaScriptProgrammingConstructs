const y=prompt("Enter any year")
if (y % 4 === 0) {
  if (y % 100 === 0) {
    if (y % 400 === 0) {
      alert(y + " is a leap year");
    } else {
      alert(y + " is not a leap year");
    }
  } else {
    //if year is divisible by 4 but not 100, it is a leap year
    alert(y + " is a leap year");
  }
} else {
  alert(y + " is not a leap year");
}


