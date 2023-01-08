const cityInput = document.querySelector("#searchBar");
const btn = document.querySelector(".buttons");

btn.addEventListener('click', () => {
    getData(cityInput.value);
});

function getData(na) {
    const key = '08c7fe7a7294316f8fdb2726cff55934';
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${na}&appid=${key}&units=metric`;
    fetch(baseURL)
        .then(res => res.json())
        .then(data => {
            const { name, sys: { country }, main: { temp, temp_min, temp_max }, weather: [{description}] } = data;
            const city = document.querySelector(".city");
            const temperature= document.querySelector(".temp");
            const desc = document.querySelector(".desc");
            const minMax = document.querySelector(".minMax");

            city.textContent = `${name} - ${country}`;
            temperature.textContent = `${temp} °C`;
            desc.textContent = `${description}`;
            minMax.textContent = `Min Temperature :${temp_min} °C   || Max Temperature : ${temp_max} °C`;

        });
}