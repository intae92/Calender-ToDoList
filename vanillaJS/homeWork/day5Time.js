// Using the boilerplate, 
// make an app that shows the time until Christmas Eve in days, hours, minutes and seconds.
// 상용구를 사용하여 크리스마스 이브까지의 시간을 일, 시간, 분 및 초 단위로 표시하는 앱을 만듭니다.
//Keep in mind: new Date() might not in KST (Korean Time), if then you have to fix that.
//2020년 기준



// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
//32400

const clockTitle = document.querySelector(".js-title");



function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  
  
  const today = new Date();
  const distance = xmasDay - today;

  const d = Math.floor(distance / (1000 * 60 * 60 * 24));//일
  const h = Math.floor((distance / (1000*60*60)) % 24);//시간
  const m = Math.floor((distance / (1000*60)) % 60);//분
  const s = Math.floor((distance / 1000) % 60);//초
  
  clockTitle.innerText = `${d}d ${h < 10 ? `0${h}` : h}h ${m < 10 ? `0${m}` : m}m ${s < 10 ? `0${s}` : s}s`;

  
}

function init() {
    
  getTime();
  setInterval(getTime,1000);

}
init();

