// const header__conter = document.querySelector("#header__container");
// const clock = header__conter.children[0].children[0];
const clock = document.querySelector(".js-clock");

const getTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const clockInit = () => {
  getTime();
  setInterval(getTime, 1000);
};
clockInit();
