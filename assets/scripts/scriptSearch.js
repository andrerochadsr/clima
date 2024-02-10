async function climaSearch() {
    const apikey = 'fa0345e1513193b62815809a6ec68648'
    const SysUnit = 'metric';
    const cidade = document.querySelector('.input-cidade').value
    const urlReq = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apikey}&units=${SysUnit}&lang=pt_br`;
    const response = await fetch(urlReq);
    const dados = await response.json();
    if (dados.message === 'city not found') {
        document.querySelector('.input-cidade').value = 'ERRO! Nenhuma cidade encontrada'
    } else {
        console.log(dados)
        const tempo = dados.weather[0].main
        if (tempo === 'Clear') {
            document.querySelector('.clima-icon').src = 'assets/images/clima/clear.png'
        }
        if (tempo === 'Clouds') {
            document.querySelector('.clima-icon').src = 'assets/images/clima/clouds.png'
        }
        if (tempo === 'Drizzle') {
            document.querySelector('.clima-icon').src = 'assets/images/clima/drizzle.png'
        }
        if (tempo === 'Mist') {
            document.querySelector('.clima-icon').src = 'assets/images/clima/mist.png'
        }
        if (tempo === 'Rain') {
            document.querySelector('.clima-icon').src = 'assets/images/clima/rain.png'
        }
        if (tempo === 'Snow') {
            document.querySelector('.clima-icon').src = 'assets/images/clima/snow.png'
        }

        document.querySelector('.temp').innerText = `${dados.main.temp} °C`
        document.querySelector('.city').innerText = `${dados.name}, ${dados.sys.country}.`
        document.querySelector('.humidade').innerText = `${dados.main.humidity}%`
        document.querySelector('.vento').innerText = `${dados.wind.speed} m/s`
    }

}
