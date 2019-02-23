import Weather from "../../models/weather.js";

// @ts-ignore
const weatherApi = axios.create({
	baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
	timeout: 3000
});

let _state = {
	weather: {}
}

let _subscribers = {
	weather: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}


export default class WeatherService {
	get Weather() {
		return _state.weather
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getWeather() {
		console.log('Calling the Weatherman')
		weatherApi.get()
			.then(res => {
				_setState('weather', new Weather(res.data))
			})
	}
	// 		ConvertToFar() {
	// 			return (Weather. * (9 / 5)) + 32
	// 			_setState('weather', 

	// }
}
