const input = document.querySelector('input')
const button = document.getElementById('btn')
const icon = document.querySelector('.icon')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description')

btn.addEventListener('click', ()=> {
  let city = input.value
  getWeather(city)
})


const getWeather = (city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'4a9eee773945d2381e01f17f89e3fa42'}`)
  .then(response => response.json())
  .then(data => {
    const iconCode = data.weather[0].icon;
    icon.innerHTML =`<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon"/>`


    const weatherCity = data.name;
    const weatherCountry = data.sys.country;
    weather.innerHTML = `${weatherCity}, ${weatherCountry}`

    let weatherTemp = data.main.temp;
    console.log(weatherTemp);
    weatherTemp = weatherTemp - 273;
    const temp = weatherTemp.toFixed(2)
    temperature.innerHTML = `${temp}°C`

    const weatherDescription = data.weather[0].description
    description.innerHTML = weatherDescription
  })
}






