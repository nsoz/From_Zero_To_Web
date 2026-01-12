const learn_button = document.getElementById("Learn");
const city_name = document.getElementById("city");

function putDataToCard(data){
    const res = document.getElementById("result");
    res.innerHTML = "";
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = data.name;

    card.innerHTML = `
    <div class="card-body">
        <h5 class="city-name">${data.name}</h5>
        <img src="W.jpg" alt="Weather Icon" class="weather-icon">
        <p class="temperature">🌡 Sıcaklık: ${data.main.temp} °C</p>
        <p class="description">❄ Durum: ${data.weather[0].description}</p>
        <p class="humidity">💧 Nem: ${data.main.humidity} %</p>
        <p class="wind">💨 Rüzgar: ${data.wind.speed} m/s</p>
    </div>
    `;
    res.appendChild(card);
}

async function get_weather(target){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${target}&appid=f551ea2840878116c991d5f5a174a6b0&units=metric`);
    const data = await response.json();
    putDataToCard(data);
}

learn_button.addEventListener("click", function(){
    const target = city_name.value;
    get_weather(target);
});

