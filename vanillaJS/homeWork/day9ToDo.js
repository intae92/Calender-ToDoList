// 1.Make a To Do list with two boards: Pending, Finished.
// 2.Allow the user to switch between boards.
// 3.Allow the user to delete To Dos.
// 4.Save everything on localStorage and restore everything on refresh.
//두개의 로컬스토리지
//새로고침 값 유지
//값 전환, 및 삭제 가능

const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoListPending = document.querySelector(".js-toDoListPending");
const toDoListFinished = document.querySelector(".js-toDoListFinished");
const PENDING_LS = 'PENDING';
const FINISHED_LS = "FINISHED";

let pendingToDos = [];
let finishedToDos = [];


function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    // console.dir(li);
    toDoListPending.removeChild(li);

    const cleanToDos = pendingToDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    
    pendingToDos = cleanToDos;
    
    saveToDos();
    
}
function deleteToDoFin(event){
    const btn = event.target;
    const li = btn.parentNode;
    // console.dir(li);
    // console.log(li.id);
    toDoListFinished.removeChild(li);

    const cleanToDos = finishedToDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    // console.log(finishedToDos);
    finishedToDos = cleanToDos;
    // console.log(finishedToDos);
    saveToDos();
    
}
function goPenToDo(event){

    event.preventDefault();
    deleteToDoFin(event);
    const btn = event.target;
    const li = btn.parentNode;
    
    // console.log(li);
    gopending(li);

}
function gopending(event){//////////////////
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const goFinBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = pendingToDos.length+1;
    
    const item = event.firstElementChild.innerText;
    
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDoFin);
    
    goFinBtn.innerText = "✅";
    goFinBtn.addEventListener("click", goFinToDo);

    span.innerText = item;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(goFinBtn);
    li.id = newId;
    toDoListPending.appendChild(li);

    const toDoObj = {
        text: item,
        id: newId,
    };
    
    pendingToDos.push(toDoObj);
    
    saveToDos();

}
function paintToDoFinishedLocal(text){
    
    const li = document.createElement("li");
    const backBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = finishedToDos.length+1;
    
    
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDoFin);
    
    backBtn.innerText = "⏪";
    backBtn.addEventListener("click", goPenToDo);
    
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(backBtn);
    li.appendChild(delBtn);
    li.id = newId;
    toDoListFinished.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId,
    };
    // console.log('.....',li);
    finishedToDos.push(toDoObj);
    
    saveToDos();

}
function paintToDoFinished(event){
    // console.dir(text);
    // console.log(text.id);
    // console.log(text.firstElementChild);
    
    
    const li = document.createElement("li");
    const backBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = finishedToDos.length+1;
    
    const item = event.firstElementChild.innerText;
    
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDoFin);
    
    backBtn.innerText = "⏪";
    backBtn.addEventListener("click", goPenToDo);
    
    span.innerText = item;

    li.appendChild(span);
    li.appendChild(backBtn);
    li.appendChild(delBtn);
    li.id = newId;
    toDoListFinished.appendChild(li);

    const toDoObj = {
        text: item,
        id: newId,
    };
    
    finishedToDos.push(toDoObj);
    
    saveToDos();
    // console.log(finishedToDos);
}

function goFinToDo(event){
    event.preventDefault();
    const btn = event.target;
    const li = btn.parentNode;
    deleteToDo(event);   
    
    paintToDoFinished(li);
    
}


function id(array){//id 재 초기화
    if(array.length>0){
        for(let i=0; i<array.length; i++){
            array[i].id = i+1;
        }
        return array;
    } 
    return array;
    
    // console.log(array);
    
}

//JSON은 'JavaScript Object Notation'
//데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔줌
function saveToDos(){//toDos를 가져와서 로컬에 저장
    //localStorage에는 string만 저장 되기 떄문에
    //JSON.stringify를 써서 string으로 변환
    // id(pendingToDos);
    localStorage.setItem(PENDING_LS, JSON.stringify(pendingToDos));
    
    // id(finishedToDos);
    localStorage.setItem(FINISHED_LS, JSON.stringify(finishedToDos));
    
    
}


function paintToDoPending(text){
    
    const li = document.createElement("li");//비어있는 li 생성
    const delBtn = document.createElement("button");//생성
    const goFinBtn = document.createElement("button");
    
    const span = document.createElement("span");
    const newId = pendingToDos.length+1;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    

    goFinBtn.innerText = "✅";
    goFinBtn.addEventListener("click", goFinToDo);
  

    span.innerText = text;
    
    //appendChild 자식노드의 마지막에 노드가 삽입됨
    li.appendChild(span);//li에 넣음
    li.appendChild(delBtn);
    li.appendChild(goFinBtn);
    li.id = newId;
    
    toDoListPending.appendChild(li);
    
    const toDoObj = {
        text: text,
        id: newId,
    };
    
    pendingToDos.push(toDoObj);
    
    saveToDos();
    
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDoPending(currentValue);
    toDoInput.value ='';
}

function loadToDos(){
    const loadedPendingToDos = localStorage.getItem(PENDING_LS);
    const loadedFinishedToDos = localStorage.getItem(FINISHED_LS);
    if(loadedPendingToDos !== null){//새로고침 리스트 보이게
        // form에서 가져올거임
        // console.log(loadedPendingToDos);
        const parsedToDos = JSON.parse(loadedPendingToDos);//object로 변환
        // console.log(parsedToDos);

        parsedToDos.forEach(function(toDo){
            paintToDoPending(toDo.text);
        });
    } 
    if(loadedFinishedToDos !== null){
        const parsedToDosd = JSON.parse(loadedFinishedToDos);//object로 변환
        // console.log('test',parsedToDosd);
        
        parsedToDosd.forEach(function(toDo){
            paintToDoFinishedLocal(toDo.text);
        });
    }
}

function init(){
//load해야할 함수 로컬스토리지에서 와서
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();