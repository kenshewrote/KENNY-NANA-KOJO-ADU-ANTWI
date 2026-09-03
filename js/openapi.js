const latitude = 35.4676;
const longitude = -97.5164;

fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Request failed");
        }
        return response.json();
    })
    .then(data => {
        let temperature = data.current_weather.temperature;
        let weatherCode = data.current_weather.weathercode;

        document.querySelector("#temperature").innerText = `Current temperature: ${temperature}°C`;
        document.querySelector("#condition").innerText = `Weather code: ${weatherCode}`;
    })
    .catch(error => {
        console.error("An error occurred:", error);
        document.querySelector("#Weather").innerHTML = "<p>Sorry, weather data could not be loaded right now.</p>";
    });