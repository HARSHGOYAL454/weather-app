
async function fetchWeather() {
    
    const city = document.getElementById('cityInput').value.trim();
    const output = document.getElementById('weatherOutput');
    
    const apiKey = '12272e5ee5ab314d7cf1981796c4a64b'; // Using your provided key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    
    output.innerHTML = '';

    if (!city) {
        output.innerHTML = '<p class="error">Please enter a city name.</p>';
        return;
    }

    try {
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found or invalid request.');
        }

        const data = await response.json();
        output.innerHTML = `
            <p><strong>${data.name}, ${data.sys.country}</strong></p>
            <p>Weather: ${data.weather[0].main} (${data.weather[0].description})</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Feels Like: ${data.main.feels_like}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        output.innerHTML = `<p class="error">${error.message}</p>`;
    }
}