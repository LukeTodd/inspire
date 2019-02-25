import Clock from "../../models/clock.js";


// @ts-ignore
let _clockApi = axios.create({
  baseURL: '//worldtimeapi.org/api'
})

let _state = {
  clocks: {}
}

let _subscribers = {
  clocks: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}

function _showTime() {
  let date = new Date()

  let day = date.getDate()
  let month = date.getMonth()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  let amPm = "AM"
  let greeting = ''

  let monthName = ''
  if (month == 0) { monthName = 'January' }
  else if (month == 1) { monthName = 'February' }
  else if (month == 2) { monthName = 'March' }
  else if (month == 3) { monthName = 'April' }
  else if (month == 4) { monthName = 'May' }
  else if (month == 5) { monthName = 'June' }
  else if (month == 6) { monthName = 'July' }
  else if (month == 7) { monthName = 'August' }
  else if (month == 8) { monthName = 'September' }
  else if (month == 9) { monthName = 'October' }
  else if (month == 10) { monthName = 'November' }
  else monthName = 'December'
  document.getElementById("month").innerHTML = monthName + " " + day



  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    amPm = "PM";
  }



  if (hour < 10 && amPm == 'AM' || hour >= 4 && amPm == 'AM') { greeting = 'Morning!' }
  else if (hour <= 8 && amPm == 'PM' || hour >= 5 && amPm == 'PM') { greeting = 'Evening!' }
  else if (hour >= 10 && amPm == 'AM' || hour < 5 && amPm == 'PM') { greeting = 'Day!' }
  else greeting = 'Night!'
  document.getElementById("greeting").innerHTML = greeting

  hour = (hour < 10) ? "0" + hour : hour;
  minute = (minute < 10) ? "0" + minute : minute;
  second = (second < 10) ? "0" + second : second;

  let time = hour + ":" + minute + ":" + " " + amPm;
  document.getElementById("clock-display").innerText = time;
  document.getElementById("clock-display").textContent = time;

  setInterval(_showTime, 500);
}

export default class ClockService {
  addSubscribers(prop, fn) {
    _subscribers[prop].push(fn)
  }

  getShowTime() {
    return _showTime()
  }

}