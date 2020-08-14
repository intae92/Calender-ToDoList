const weather = document.querySelector(".js-weather");
const API_KEY = "e3d86ce310fd2fa9bce047161ff7c473";
const COORES = 'coords';

function getWeather(lat, lng){//날씨정보 네트워크로 받아오기
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json()
        }).then(function(json){
            // console.log(json)
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
        });
}


function saveCoords(coordsObj){
    localStorage.setItem(COORES, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
function handleGeoError(position){
    console.log('Cant access geo location');
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORES);
    if(loadedCoords === null){
        askForCoords();//좌표 불러오기
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        
        getWeather(parsedCoords.latitude, parsedCoords.longitude);

    }
}

function init(){
    loadCoords();
}

init();