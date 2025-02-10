document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("conf.json");
    const config = await response.json();
    const ville = config.ville;
    document.getElementById("ville").textContent = ville;

    const apiKey = "f09453edb50733342b2a0e80ad92d461";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&units=metric&lang=fr`;

    try {
        const meteoResponse = await fetch(url);
        const data = await meteoResponse.json();
        document.getElementById("temperature").textContent = data.main.temp;
        document.getElementById("condition").textContent = data.weather[0].description;
    } catch (error) {
        console.error("Erreur lors de la récupération des données météo", error);
    }
});