import ClockService from "./clockService.js";

let _cs = new ClockService

function drawClock() {
  document.querySelector('clock').innerHTML = _cs.Clocks.getTemplate()
}

export default class ClockController {
  constructor() {

    _cs.getShowTime()
  }
}