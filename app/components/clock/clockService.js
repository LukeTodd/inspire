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

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("clock-display").innerText = time;
  document.getElementById("clock-display").textContent = time;

  setInterval(showTime, 1000);
}

export default class ClockService {
  addSubscribers(prop, fn) {
    _subscribers[prop].push(fn)
  }
  get Clocks() {
    return _state.clocks
  }
  getClockApi() {
    _clockApi.get('timezone/America/Denver')
      .then(res => {
        console.log(res)
        let data = new Clock(res.data)
        _setState('clocks', data)
      })
  }
  getShowTime() {
    return showTime()
  }

}