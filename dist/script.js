const apiKey = "a88938ffa1441ced444d448a912c6298";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector('.input_box')
const searchBtn = document.querySelector('.button')
const weather_icon = document.querySelector('.weather-icon ')

async function checkWeather(city){

    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data)

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h"
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"


    if(data.weather[0].main == "Clouds"){
        weather_icon.src = "images/clouds.png"

    }
    else if(data.weather[0].main == "Clear"){
        weather_icon.src = "images/clear.png"

    }
    else if(data.weather[0].main == "Rain"){
        weather_icon.src = "images/rain.png"

    }
    else if(data.weather[0].main == "Drizzle"){
        weather_icon.src = "images/drizzle.png"

    }
    else if(data.weather[0].main == "Mist"){
        weather_icon.src = "images/mist.png"

    }    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})



