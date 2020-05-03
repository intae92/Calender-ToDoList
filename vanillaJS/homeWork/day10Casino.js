// 1.Find a  random number on a range between 0 and a number defined by the user.
// 0 과 사용자가 정의한 숫자 사이의 랜덤숫자를 찾기
// 2.Use range input. 범위입력 사용
// 3.Update the range value in real time. 실시간 범위 값 업데이트
// 4.Only play after the user chooses a number. 사용자가 숫자 선택후 플레이
// 5.Notify the user if the game is lost or won. lost won 표시
// 6.Don't give up.
// const form = document.querySelector("#js-form");
const inputRange = document.querySelector("#js-inputRange");
const textRange = document.querySelector("#js-textRange");
const inputNumber = document.querySelector("#js-inputNumber");
const playBtn = document.querySelector("#js-playBtn");
const inputValue = document.querySelector("#js-inputValue");
const machine = document.querySelector("#js-machine");
const judgment = document.querySelector("#js-judgment");
const div = document.querySelector(".hide");

let MACHINE, USER, NUM;
const SHOWING = "showing";

function paintRealTimeValue(text){
    textRange.innerText = text;
}
function randomNumber(n){  
    NUM = Number(n)+1;
    MACHINE = Math.floor(Math.random()*NUM);
    
}
function rangeValue(e){
    const value = e.target.value;
    paintRealTimeValue(value);

    randomNumber(value);
    
}
function handleSubmit(e){
    USER = inputNumber.value;
    inputValue.innerText = USER;
    if(inputValue.innerText !== '' && textRange.innerText !== ''){
        div.classList.add(SHOWING);
        if(machine.innerText === ''){
            machine.innerText = MACHINE;
        } else {
            randomNumber(NUM-1);
            
            machine.innerText = MACHINE;
        }
    
    }
    if(Number(USER) === MACHINE){
        judgment.innerText = `You won!`;
    } else {
        judgment.innerText = `You lost!`;
    }
    
    
}
function init(){
    inputRange.addEventListener("input",rangeValue);
    playBtn.addEventListener("click", handleSubmit)
    
}

init();



// const range = document.getElementById("js-range");
// const title = document.querySelector(".js-title");
// const guessForm = document.getElementById("js-guess");
// const result = document.getElementById("js-result");

// function handleRangeChange(e) {
//   const selectedRange = title.querySelector("span");
//   selectedRange.innerHTML = range.value;
// }

// function handleGuessSubmit(e) {
//   e.preventDefault();
//   const guessInput = guessForm.querySelector("input");
//   if (guessInput.value === "") {
//     return;
//   }
//   const max = range.value;
//   const random = Math.ceil(Math.random() * max);
//   const userGuess = parseInt(guessInput.value, 10);
//   const resultSpan = result.querySelector("span");
//   resultSpan.innerHTML = `
//   You chose: ${userGuess},
//   the machine chose: ${random}.<br />
//   <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
//   `;
// }

// guessForm.addEventListener("submit", handleGuessSubmit);
// range.addEventListener("input", handleRangeChange);
