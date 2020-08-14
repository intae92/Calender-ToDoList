// <⚠️ DONT DELETE THIS ⚠️>


const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const title = document.querySelector("h2");
let num = 0, n = Math.floor(Math.random()*5), resizeCheck = false;

const superEventHandler = {
    randomNumber : function(){
        //resize
        if(resizeCheck){
            return colors[num];

        } else {
            while(num === n){

                n = Math.floor(Math.random()*5);
            }
            return colors[num=n];
        }
    },
    
    mouseEnter : function(){
        resizeCheck = false;
        title.innerText = "The mouse is here!";
        title.style.color = superEventHandler.randomNumber();
        // console.log('enter',num);
        
    },
    mouseLeave : function(){
        resizeCheck = false;
        title.innerText = "The mouse is gone!";
        title.style.color = superEventHandler.randomNumber();
        // console.log('leave',num);
        
    },
    resize : function(){
        
        title.innerText = "You just resized!";
        title.style.color = superEventHandler.randomNumber();
        resizeCheck = true;
        // console.log('resize',num);
    },
    rightClick : function(e){
        // e.preventDefault();
        resizeCheck = false;
        title.innerText = "That was a right click!";
        title.style.color = superEventHandler.randomNumber();
        // console.log('click',num);
    },
    

    init : function(){
        // let colorNumber = 0;
        title.addEventListener("mouseenter", this.mouseEnter);
        title.addEventListener("mouseleave", this.mouseLeave);
        window.addEventListener("resize", this.resize);
        window.addEventListener("contextmenu", this.rightClick);
        
    },

};

superEventHandler.init();


//마우스가 위에 있으면 제목의 텍스트 변경
// 1.The text of the title should change when the mouse is on top of it.
// 2.The text of the title should change when the mouse is leaves it.
// 3.When the window is resized the title should change.
// 4.On right click the title should also change.
// 5.The colors of the title should come from a color from the colors array.
// 6.DO NOT CHANGE .css, or .html files.
// 7.ALL function handlers should be INSIDE of "superEventHandler"

//1.마우스가 위에 있으면 제목의 텍스트가 변경되어야 합니다.
//2.마우스가 떠나면 제목의 텍스트가 변경되어야 합니다.
//3.창의 크기가 조정되면 제목이 변경되어야 합니다.
//4.마우스 오른쪽 버튼을 클릭하면 제목도 변경됩니다.
//5.제목의 색상은 색상 배열의 색상에서 가져와야 합니다.
//6.css html 파일을 변경하지 말것
//7.모든 함수 핸들러는 슈퍼이벤트핸들러의 내부에 있어야 합니다.
