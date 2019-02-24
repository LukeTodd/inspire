import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {

	document.querySelector('#weather').innerHTML = _weatherService.Weather.getTemplate()

}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
