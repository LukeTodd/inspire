export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = data.main.temp
    this.weather = data.weather.main
    this.icon = data.weather.icon
    this.wind = data.wind.speed

    function ConvertToFar() {
      return (this.kelvin * (9 / 5)) + 32

      this.faren = ConvertToFar()
    }
  }
  getTemplate() {
    return `
    <h2>${this.city}</h2>
    <p>${this.faren}</p>
    <p>${this.weather}</p>
    <p>${this.icon}</p>
    <p>Wind: ${this.wind}mph</p>
    `
  }
}