//id css에서 #
//class .

//이벤트
//DOM요소에 클래스를 동적으로 추가 및 제거하는 두 가지 주요 방법
//className 문자열을 반환
//classList 객체를 반환
const title = document.querySelector('#title');

const CLICEKD_CLASS = "clicked";

function handleClick(){
    // title.classList.toggle(CLICEKD_CLASS);//class없으면 add 있으면 remove

    // const currentClass = title.className;
    const hasClassClicked = title.classList.contains(CLICEKD_CLASS);
    
    if(hasClassClicked){
        title.classList.remove(CLICEKD_CLASS);
    } else {
        title.classList.add(CLICEKD_CLASS);
        
    }

}

function init(){
    title.addEventListener("click", handleClick);
}
init();

// title.innerHTML = "hihihihih'";
// // console.dir(title);
// title.style.color = "blue";
// console.dir(document);

// console.dir(window);

// function handleResize(){
//     console.log('ddddddd');
// }
// window.addEventListener('resize', handleResize);
// window.addEventListener('resize', handleResize());
//() 함수를 호출 하기 때문에 바로 실행됨
//------
// const BASE_COLOR = 'rgb(231, 76, 60)';
// const OTHER_COLOR = "#27ae60";

// function handleClick(){
//     const currentColor = title.style.color;
//     if(currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }
// function init(){
//     title.style.color = BASE_COLOR;
//     title.addEventListener('mouseenter', handleClick);
// }

// init();
//----------

