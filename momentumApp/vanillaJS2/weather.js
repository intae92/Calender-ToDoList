const weather = document.querySelector(".js-weather");
const API_KEY = "e3d86ce310fd2fa9bce047161ff7c473";
const COORES = "coords";

const getWeather = (lat, lng) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
};

const saveCoords = (coordsObj) => {
  localStorage.setItem(COORES, JSON.stringify(coordsObj));
};

const handleGeoError = (position) => {
  console.log("cant acces geo location");
};

const handleGeoSucces = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };

  saveCoords(coordsObj);
  getWeather(latitude, longitude);
};

const askForCoords = () => {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
};

const loadCoords = () => {
  const loadedCoords = localStorage.getItem(COORES);
  if (loadedCoords === null) {
    askForCoords(); //좌표 불러오기
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
};

function init() {
  loadCoords();
}

init();
