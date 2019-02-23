export default class Quote {
  constructor(data) {
    this.url = data.url
    this.author = data.author
    this.body = data.body
  }

  getTemplate() {
    return `
    <p>${this.body}</p>
    <p>-${this.author}</p>
    `
  }
}