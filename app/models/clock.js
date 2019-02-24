export default class Clock {
  constructor(data) {
    this.unixtime = data.unixtime
    this.day = data.day_of_week
    this.datetime = data.datetime
  }
  dayName(num) {
    let dayName = ''
    if (num == 0) { dayName = 'Sunday' }
    else if (num == 1) { dayName = 'Monday' }
    else if (num == 2) { dayName = 'Tuesday' }
    else if (num == 3) { dayName = 'Wednesday' }
    else if (num == 4) { dayName = 'Thursday' }
    else if (num == 5) { dayName = 'Friday' }
    else dayName = 'Saturday'
    return dayName
  }



  getTemplate() {
    return `
    <p>dayName(${this.day})</p>
    <p>${this.datetime}</p>
    `
  }
}