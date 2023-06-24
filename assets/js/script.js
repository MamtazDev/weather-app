const apiKey = "cdb804a88e1d26fa714b6edd895a5dff";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("search_input");
// const searchBtn = document.getElementById("search_btn");
const weatherIcon = document.querySelector(".weather-icon"); 

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "./assets/images/clouds.png"
    }else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = "./assets/images/clear.png"
    }else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "./assets/images/drizzle.png"
    }else if(data.weather[0].main == 'Humidity'){
        weatherIcon.src = "./assets/images/humidity.png"
    }else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = "./assets/images/mist.png"
    }else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "./assets/images/rain.png"
    }else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = "./assets/images/snow.png"
    }

    document.querySelector(".weather").style.display = "block";
}




// searchBtn.addEventListener('click', ()=>{
//     checkWeather(searchBox.value);
// })



searchBox.addEventListener("keypress", function(event) {

    if (event.key === "Enter"){

        checkWeather(searchBox.value);
    }
  });
