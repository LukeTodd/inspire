import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  document.querySelector('#quote').innerHTML = _qs.Quotes.getTemplate()
}



export default class QuoteController {
  constructor() {
    _qs.addSubscribers('quotes', drawQuote)
    _qs.getQuotesApi()
  }
}
