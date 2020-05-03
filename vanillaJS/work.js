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
const superEventHandler = {

    a : function(){
        console.log('aaa');
    },
    b : function(){
        console.log('bbb');
    },

    mouseEnter : function(){
        
        title.innerText = "The mouse is here!";
        this.
        console.log('this  ',this);
        console.log('this.a  ',this.a);
        console.log('superEventHandler.a()  ',superEventHandler.a());
        console.log('this.a()  ', this.a());
        

    },

    mouseLeave : function(){
        title.innerText = "The mouse is gone!";
        superEventHandler.b();
    },

    init : function(){
        title.addEventListener("mouseenter", this.mouseEnter);
        title.addEventListener("mouseleave", this.mouseLeave);
    },
};

superEventHandler.init();

