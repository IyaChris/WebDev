

async function loadWeather () {
    try{
        const res = await fetch("/weather");
        const data = await res.json();
console.log("Weather data:", data);
      const temp  = data.temp;

        document.querySelector("#temp").textContent = temp !==undefined ? `${temp}   degrees`: "NA";
    } catch (err) {
        console.error("Weather error", err);
    }
}



async function loadCondition () {
    try{
        const res = await fetch("/weather");
        const data = await res.json();
console.log("Weather data:", data);
      const description  = data.description;

        document.querySelector("#description").textContent = description !==undefined ? `${description}   degrees`: "Cloudy";
    } catch (err) {
        console.error("Weather error", err);
    }
}
loadWeather();
loadCondition();