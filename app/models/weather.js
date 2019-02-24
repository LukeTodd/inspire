


export default class Weather {
  constructor(data) {
    this.city = data.name
    this.kelvin = data.main.temp
    this.weather = data.weather[0].main
    this.icon = data.weather[0].icon
    this.wind = data.wind.speed
    this.img = "http://openweathermap.org/img/w/" + this.icon + ".png";
    this.farenheit = function () {
      return ((this.kelvin - 273.15) * (9 / 5) + 32).toFixed(0)
    }
  }
  getTemplate() {
    return `
    <div class="weather-display">
    <h4 class="degree-display center-text">${this.farenheit()}° F</h4>
    
    <img class="w-icon" src="${this.img}">
    
    </div>
    `
  }

}
{/* <p class="no-margin">${this.city}</p> */ }
{/* <p class="no-margin">Wind: ${this.wind}mph</p> */ }