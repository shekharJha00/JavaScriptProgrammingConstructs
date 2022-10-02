function feetToInches(feet){
    return feet * 12;
  }
  function feetToMeter(meter){
    return meter * 0.304;
  }
  function InchesToFeet(inches){
    return inches*0.083333;
  }
  function metersToFeet (meters) {
    return meters * 3.28084;
  }
const options=prompt("Enter your option:");
  switch (options){
    case "1":
      const feet=prompt("enter a value to convert:");
      console.log(feetToInches(feet));
      break;
      case "2":
      const meter=prompt("enter a value to convert:")
        console.log(feetToMeter(meter));
        break;
        case "3":
      const inches=prompt("enter a value to convert:")
        console.log(InchesToFeet(inches));
        break;
        case"4":
      const meters=prompt("enter a value to convert:")
        console.log(metersToFeet(meters));
        break;
        default: console.log("Invalid option");
  }