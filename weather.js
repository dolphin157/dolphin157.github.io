const AIP_KEY = "32501d930541550b69ed4fdd90d2e899";

let clouds="";
let rain="";
let thunderstorm="";
let drizzle ="";
let snow ="";
let atmosphere="";
let clear="";
let mist="";
let finalwethar;

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${AIP_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data =>{
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            let weatherInfo = data.weather[0].main;
            if(weatherInfo === "Clouds"){
                 clouds = "☁️";
                 weatherInfo = clouds;
            }
            else if(weatherInfo === "Rain"){
                rain = "🌧";
                weatherInfo = rain;
            }
            else if(weatherInfo === "Thunderstorm"){
                thunderstorm = "⚡️";
                weatherInfo = thunderstorm;
            }
            else if(weatherInfo === "Drizzle"){
                drizzle = "🌦";
                weatherInfo = drizzle;
            }
            else if(weatherInfo === "Snow"){
                snow = "❄️";
                weatherInfo = snow;
            }
            else if(weatherInfo === "Atmosphere"){
                atmosphere = "🌤";
                weatherInfo = atmosphere;
            }
            else if(weatherInfo === "Clear"){
                clear = "☀️";
                weatherInfo = clear;
            }
            else if(weatherInfo === "Mist"){
                mist = "💦";
                weatherInfo = mist;
            }

            weather.innerText =  `${weatherInfo} / ${data.main.temp}°`;
    });
}

function onGeoError(){
    alert("Can't find you. I can't give you weather");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);