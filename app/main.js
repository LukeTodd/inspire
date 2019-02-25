import WeatherController from "./components/weather/weather-controller.js";
import TodoController from "./components/todo/todo-controller.js";
import ImageController from "./components/image/image-controller.js";
import QuoteController from "./components/quote/quote-controller.js";
import ClockController from "./components/clock/clockController.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      todoController: new TodoController(),
      imagecontroller: new ImageController(),
      quotecontroller: new QuoteController(),
      clockcontroller: new ClockController()
    }
  }
}

window['app'] = new App()  