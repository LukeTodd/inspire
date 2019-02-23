


export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
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