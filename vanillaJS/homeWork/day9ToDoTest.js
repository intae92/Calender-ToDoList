const pendingList = document.querySelector("#js-pending"),
finishedList = document.querySelector("#js-finished"),
form = document.querySelector("#js-form"),
input = form.querySelector("input");

const PENDING = "PENDING";
const FINISHED = "FINISHED";

let pendingTasks, finishedTasks;

function getTaskObject(text){
    return {
        id: String(Date.now()),
        text
    };
}
function buildGenericLi(task){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    span.innerText = task.text;
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click", deleteTask);
    
    li.appendChild(span, deleteBtn);
    li.id = task.id;
    // console.dir(li);
    return li;
}

function paintPendingTask(task){
    const genericLi = buildGenericLi(task);
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "✅";
    completeBtn.addEventListener("click", handleFinishClick);
    genericLi.append(completeBtn);
    pendingList.append(genericLi);

}
function savePendingTask(task){
    pendingTasks.push(task);
    
}
function handleFormSubmit(e){
    e.preventDefault();
    const taskObj = getTaskObject(input.value);
    input.value = "";
    paintPendingTask(taskObj);
    savePendingTask(taskObj);
}

function init(){
    form.addEventListener("submit", handleFormSubmit);

}

init();