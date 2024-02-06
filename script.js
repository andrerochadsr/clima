async function poke() {
    const apikey = 'fa0345e1513193b62815809a6ec68648'
    const cidade = 'sao paulo';
    const SysUnit = 'metric';
    const urlReq = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apikey}&units=${SysUnit}&lang=pt_br`;
    //const urlReq = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apikey}`;
    const response = await fetch(urlReq);
    const clima = await response.json();
    console.log(clima);
    const main = clima.main;
    console.log(`temperatura: ${main.temp}° Ceçsius`)
    console.log(`sensação térmica: ${main.feels_like}° Celsius`)
    console.log(`humidade: ${main.humidity}%`)
    console.log(`pressao: ${main.pressure} hPa`)
    console.log(`temperatura máxima: ${main.temp_max}° Celsius`)
    console.log(`temperatura minima: ${main.temp_min}° Celsius`)
    console.log(`Cidade: ${clima.name+ '. País: '+ clima.sys.country}`)
    console.log(`main: ${clima.weather[0].main}`)
    console.log(`Descrição: ${clima.weather[0].description}`)
    const visibilidade = clima.visibility / 1000
    console.log(`visibilidade: ${visibilidade} KM de distância.`)
    //document.getElementById('saida').innerHTML =

}
