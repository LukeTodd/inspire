import ClockService from "./clockService.js";

let _cs = new ClockService


export default class ClockController {
  constructor() {

    _cs.getShowTime()
  }
}