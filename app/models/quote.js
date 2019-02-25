export default class Quote {
  constructor(data) {
    this.url = data.url
    this.author = data.author
    this.body = data.body
  }

  getTemplate() {
    return `
    <p  class="quote">${this.body}</p>
    <p class="quote">-${this.author}</p>
    `
  }
}