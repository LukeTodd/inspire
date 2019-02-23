import Quote from "../../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quotes: {}
}

let _subscribers = {
	quotes: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class QuoteService {
	addSubscribers(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get Quotes() {
		return _state.quotes
	}

	getQuotesApi() {
		_quoteApi.get()
			.then(res => {
				let data = new Quote(res.data.quote)
				_setState('quotes', data)
			})
	}
}
