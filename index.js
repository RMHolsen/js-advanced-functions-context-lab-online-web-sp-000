/* Your Code Here */
// Most of this taken from js-advanced-functions-introduction-to-context-lab-online-web-sp-000
// for some reason the explicit context call etc REALLY doesn't like the const funcName = (args) => {} format
const createEmployeeRecord = (employeeArray) => {
    return {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = (employeeSuperArray) => {
    //maps out each array in the employee superarray and uses the previous method to craete the employee record object, same as last lab
    return employeeSuperArray.map( function(employee) {
        return createEmployeeRecord(employee)
    })
}
    
let createTimeInEvent = function(dateTime) {
// dateTime format is YYYY-MM-DD HHMM 
    let timeArray = dateTime.split(' ')
    this.timeInEvents.push(
    // in this case the employee is the 'this
        {
            type: "TimeIn",
            hour: parseInt(timeArray[1], 10),
            date: timeArray[0]
        })
    return this
} 


let createTimeOutEvent = function (dateTime) {
    let timeArray = dateTime.split(' ');
    this.timeOutEvents.push({
            type: "TimeOut",
            hour: parseInt(timeArray[1], 10),
            date: timeArray[0]
        })
    return this
} 
    
let hoursWorkedOnDate = function (date) {
    let timeIn = this.timeInEvents.find( function(i) {
        return i.date === date;
    }) 
    let timeOut = this.timeOutEvents.find (function(i) {
        return i.date === date;
    })
    let hoursWorked = (timeOut.hour - timeIn.hour) / 100
    return hoursWorked 
}
    
let wagesEarnedOnDate = function (date) {
    let wage = this.payPerHour
    let wagesEarned = hoursWorkedOnDate.call(this, date) * wage

    return wagesEarned
}
    
let calculatePayroll = function (employeeSuperArray) {
    return employeeSuperArray.reduce( function(total, employee) {
        return total + allWagesFor.call(employee)
        // don't forget the .call, have to call the thingamagummer
        // I'm tired but you know what I mean. explicit calls
    }, 0)
}

// This one is okay as is, for the same reason as the one upstream: no explicit calls
const findEmployeeByFirstName = (employeeSuperArray, name) => {
    let employee = employeeSuperArray.find( function(n) {
        return n.firstName === name;
    })
    return employee
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}