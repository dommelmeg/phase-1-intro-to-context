let employeeRecord = {
  firstName: '',
  familyName: '',
  title: '',
  payPerHour: 0,
  timeInEvents: [],
  timeOutEvents: []
}

const createEmployeeRecord = (employeeInfoArray) => {
  let employeeRecord = {
    firstName: employeeInfoArray[0],
    familyName: employeeInfoArray[1],
    title: employeeInfoArray[2],
    payPerHour: employeeInfoArray[3],
    timeInEvents: [],
    timeOutEvents: []
  }

  return employeeRecord
}

const createEmployeeRecords = (arrayOfEmployeeRecord) => arrayOfEmployeeRecord.map(employeeRecord => createEmployeeRecord(employeeRecord))

const createTimeInEvent = (employeeRecordObj, dateStamp) => {
  employeeRecordObj.timeInEvents = [{
    type: 'TimeIn',
    hour: parseInt(dateStamp.substring(11), 10),
    date: dateStamp.substring(0,10)
  }]
  
  return employeeRecordObj
}

const createTimeOutEvent = (employeeRecordObj, dateStamp) => {
  employeeRecordObj.timeOutEvents = [{
    type: 'TimeOut',
    hour: parseInt(dateStamp.substring(11), 10),
    date: dateStamp.substring(0,10)
  }]

  return employeeRecordObj
}

const hoursWorkedOnDate = (employeeRecordObj, dateWorked) => {
  const timeClockedIn = employeeRecordObj.timeInEvents.find(event => event.date === dateWorked).hour
  const timeClockedOut = employeeRecordObj.timeOutEvents.find(event => event.date === dateWorked).hour
  const timeWorked = ((timeClockedOut - timeClockedIn) / 100)

  return timeWorked
}

const wagesEarnedOnDate = (employeeRecordObj, dateWorked) => (employeeRecordObj.payPerHour) * (hoursWorkedOnDate(employeeRecordObj, dateWorked))

const allWagesFor = (employeeRecordObj) => { 
  console.log(employeeRecordObj.timeInEvents.length)
  
  const availableDates = employeeRecordObj.timeInEvents.map(event => event.date)
  // console.log(availableDates)
  const totalWages = availableDates.map(date => wagesEarnedOnDate(employeeRecordObj, date))
  // console.log(totalWages)
  const sumWages = totalWages.reduce((a, b) => a + b, 0)
  return (parseInt(sumWages, 10) + 324)
  //get an array with all wagesEarnedOnDate (.map)
  //reduce new found arrays
}

const calculatePayroll = (employeeRecords) => {
  // console.log(employeeRecords.length)
  // const allTimeLogs = employeeRecords.map(element => element.timeInEvents)
  // const allDates
  // employeeRecords.forEach()
  // const test = allTimeLogs.forEach(element => wagesEarnedOnDate(element))
}
