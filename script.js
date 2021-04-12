const optionsInput = document.querySelector('.options__input'); 
const optionsItemsList = document.querySelector('.options__items-list');
const optionsItems = document.querySelector('.options__items');
const weather = document.querySelector('.weather');   
const selectLanguageBar = document.querySelector('.language-bar__select'); 
const weatherDisplay = document.querySelector('.weather-display'); 

selectLanguageBar.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let language = selectLanguageBar.value;
    location.href = `${window.location.pathname}#${language}`;
    location.reload();
}

function changeLanguage() {
    let selectLang = ['en', 'ru', 'md'];
    let hash = window.location.hash.substring(1);
    
    if (!selectLang.includes(hash)) {
        location.href = `${window.location.pathname}#en`;
        location.reload();
    }
    selectLanguageBar.value = hash;
}
changeLanguage();

function showCityList() {
    let inputValue = optionsInput.value.trim().toLowerCase();
    let outInner = '';
    
    if (inputValue != '') {
        weather.classList.add('displayNone');
        weatherDisplay.classList.remove('weather_col');
    
        cId.forEach(item => {
            if (item.name.toLowerCase().search(inputValue) != -1) {
                optionsItems.classList.remove('displayNone');
                outInner += `<li class='options__items-list-point'>${item.name}</li>`;
            } 
        });
    } else {
        optionsItems.classList.add('displayNone');
    }

    optionsItemsList.innerHTML = outInner;
}
optionsInput.oninput = showCityList;
   
function selectCity(event) {
    optionsInput.value = event.target.textContent;
    optionsItems.classList.add('displayNone');
    weatherDisplay.classList.add('weather_col');
    weather.classList.remove('displayNone');
    optionsInput.classList.add('options__input_animation');
    getWeather();
    showWeather();
}
optionsItemsList.onclick = selectCity;

function getWeather() {
    const param = {
        "url": "https://api.openweathermap.org/data/2.5/",
        "appid": "5dd05d5680c6f42ed90acdc614cf8bc8"
    }
    let cityID;

    cId.forEach(item => {
        if (optionsInput.value == item.name) {
            cityID = item.id;
        }
    });
  
    fetch(`${param.url}weather?id=${cityID}&appid=${param.appid}`)
        .then(weather => weather.json())
        .then(showWeather);
}

function showWeather(data) {
    let language = window.location.hash.substring(1); 
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate();
    let dateCurrent = document.querySelector('.weather__date-current');
    let firstPartMonth = lang.ru.date[month].substring(0, lang.ru.date[month].length - 1);
    let endPartMonth = lang.ru.date[month].substring(lang.ru.date[month].length - 1);

    for (key in lang) {
       if (key == language) {
        document.querySelector('title').textContent = `${lang[key].title[0].toUpperCase()}${lang[key].title.substring(1)}`;
        optionsInput.placeholder = lang[key].placeholder;
        document.querySelector('.weather__city-name').textContent = optionsInput.value;
            if (language == 'ru') {
                if (endPartMonth == 'т') {
                    dateCurrent.textContent = `${day} ${firstPartMonth}${endPartMonth}а ${year}`;
                } else if (endPartMonth == 'ь' || endPartMonth == 'й') {
                    dateCurrent.textContent = `${day} ${firstPartMonth}я ${year}`;
                }
            } else {
                dateCurrent.textContent = `${day} ${lang[key].date[month]} ${year}`;
            } 
            document.querySelector('.weather__humidity-procent').textContent = `${lang[key].humidity}: ${data.main.humidity}%`;
            document.querySelector('.weather__wind-speed-1').textContent = `${lang[key].wind[0]} `;
            document.querySelector('.weather__wind-speed-2').textContent = `${lang[key].wind[1]}:  ${data.wind.speed} ${lang[key].wind[2]}`;
            document.querySelector('.weather__temp-grad').innerHTML = `${lang[key].temperature}: ${Math.round(data.main.temp - 273)}&deg;C`;
            document.querySelector('.weather__img').innerHTML = `<img class='weather__img-meteo' src = 'images/${data.weather[0].description}.svg'/>`;
       }
    }
}

showWeather();




