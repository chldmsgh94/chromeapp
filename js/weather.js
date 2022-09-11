const weather = document.querySelector(".weather");

let url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=1c89017e809e0888cd4f903effc60a52";

function navGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    url = url.replace("{lat}", `${lat}`);
    url = url.replace("{lon}", `${lon}`);

    fetch(url).then(response => response.json()).then(data => {
        const cityName = data.name;
        const cityWeather = data.weather[0].main;

        weather.innerText = `${cityName}, ${cityWeather}`;
    });


}

function navGeoError() {
    console.log("Error");
}

navigator.geolocation.getCurrentPosition(navGeoOk, navGeoError);