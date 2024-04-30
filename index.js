// Your code here
function createEmployeeRecord (empArr){
    let newRecord = {
        firstName: empArr[0],
        familyName: empArr[1],
        title: empArr[2],
        payPerHour: empArr[3],
        timeInEvents: [],
        timeOutEvents: [],

    };
    return newRecord;

}

function createEmployeeRecords(empsArr){

    let newEmpArrs = [];

    for(let i = 0; i < empsArr.length; i++){
        newEmpArrs[i] = createEmployeeRecord(empsArr[i]);

    }
    return newEmpArrs;


}

function createTimeInEvent(empObj, eventStr){

    let dateTime = eventStr.split(` `);
    let newEventObj = {
        type: "TimeIn",
        hour: parseInt(dateTime[1]),
        date: dateTime[0],
    }
    empObj.timeInEvents.push(newEventObj);
    return empObj;


}

function createTimeOutEvent(empObj, eventStr){
    

    let dateTime = eventStr.split(` `);
    let newEventObj = {
        type: "TimeOut",
        hour: parseInt(dateTime[1]),
        date: dateTime[0],
    }
    empObj.timeOutEvents.push(newEventObj);
    return empObj;


}

function hoursWorkedOnDate(empObj, targetDate){
    let loopCounter = 0; 

    while(empObj.timeInEvents[loopCounter].date !== targetDate){
        loopCounter++;
    }
    return (empObj.timeOutEvents[loopCounter].hour - empObj.timeInEvents[loopCounter].hour)/100;

}


function wagesEarnedOnDate(empObj, targetDate){

    return empObj.payPerHour * (hoursWorkedOnDate(empObj, targetDate));


}


function allWagesFor(empObj){

    let wages = 0;

    for(let i = 0; i < empObj.timeInEvents.length; i++){
        wages = wages + (wagesEarnedOnDate(empObj, empObj.timeInEvents[i].date));
    }
    return wages;
}

function calculatePayroll(allEmps){
    let wages = 0;

    for(let i = 0; i < allEmps.length; i++){
        wages = wages + (allWagesFor(allEmps[i]));
    }
    return wages;
}