console.log("Welcome to the Employee Wage Computation Problem\n");
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const EMP_RATE_PER_HR = 20;
const FULL_TIME_HRS = 8;
const PART_TIME_HRS = 4;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HRS = 100;
let empWage = 0;
let totalWorkingHrs = 0;
let totalEmpWage = 0;
let empDailyWageArr = new Array();
let empDayWiseMap = new Map();
function getWorkHrs(empCheck)
{
    switch(empCheck)
    {
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
        case IS_PART_TIME:
            return PART_TIME_HRS;
        default:
            return 0;
    }
}
function CalculateWage(empHrs){
    return empHrs*EMP_RATE_PER_HR;
}
let empHrs = 0;
let workingDay = 1;
while(workingDay <= MAX_WORKING_DAYS && totalWorkingHrs <= MAX_WORKING_HRS)
{
    let empCheck = Math.floor(Math.random()*10)%3;
    empHrs = getWorkHrs(empCheck);
    empWage = EMP_RATE_PER_HR * empHrs;
    empDailyWageArr.push(CalculateWage(empHrs));
    empDayWiseMap.set(workingDay,CalculateWage(empHrs));
    totalWorkingHrs += empHrs;
    workingDay++;
}
totalEmpWage = CalculateWage(totalWorkingHrs);
console.log("Total Employee wage for a Month -> '"+totalEmpWage+"' worked for -> '"+totalWorkingHrs+", Hrs");
let totalWage = 0;
function getTotalWage(empWage)
{
    totalWage += empWage;
}
empDailyWageArr.forEach(getTotalWage);
console.log(" :- TotalWage using ForEach: "+totalWage);

function totalWagwUsingReduce(total,dailyEmpWage)
{
    return total + dailyEmpWage;
}
console.log(" :-TotalWage using reduce: "+empDailyWageArr.reduce(totalWagwUsingReduce,0));
let daycount = 0;


function mapDayWithWage(dailyEmpWage)
{
    daycount++;
    return "Day"+daycount+":"+dailyEmpWage;
}
let mapDayWithDailyWage = empDailyWageArr.map(mapDayWithWage);
console.log(" :-Day along with dailyWage -> "+mapDayWithDailyWage);


function getFullTimeDays(dailyEmpWage)
{
    return dailyEmpWage.includes("160");
}
let fullTimeDays = mapDayWithDailyWage.filter(getFullTimeDays);
console.log(":- FullTime working days -> "+fullTimeDays);
console.log(" :-First occurance of Fulltime workday -> "+mapDayWithDailyWage.find(getFullTimeDays));
console.log(":- Check All elements are Full time working days -> "+fullTimeDays.every(getFullTimeDays));


function getPartTimeDays(dailyEmpWage)
{
    return dailyEmpWage.includes("80");
}
console.log(" :-Check if any elements are part time working days -> "+mapDayWithDailyWage.some(getPartTimeDays));


function getTotalWorkingDays(numbOfDays,dailyEmpWage)
{
    if(dailyEmpWage > 0)
        return numbOfDays+1;
    return numbOfDays;
}
console.log(" :-Number of actual working days -> "+ empDailyWageArr.reduce(getTotalWorkingDays,0));
console.log(empDayWiseMap);
function totalEmpWageMap(dailyEmpWage,totalWage)
{
    return totalWage + dailyEmpWage;
}
console.log(":-Total wage using Map -> "+Array.from(empDayWiseMap.values()).reduce(totalEmpWageMap,0));