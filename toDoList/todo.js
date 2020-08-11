const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const doneToDoList = document.querySelector(".js-doneToDoList");

const TODOLIST_LS = "toDoList";
const DONELIST_LS = "doneList";
let toDos = [];
let doneToDos = [];

const saveToDo = () => {
  localStorage.setItem(TODOLIST_LS, JSON.stringify(toDos));
  localStorage.setItem(DONELIST_LS, JSON.stringify(doneToDos));
};

const deleteToDo = (e) => {
  const btn = e.target;
  const li = btn.parentNode;
  const ul = li.parentNode;

  const btnType = btn.classList.value;
  const ulType = ul.classList.value;
  console.log(ulType);
  li.remove();
  if (ulType === "js-toDoList") {
    const cleanToDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    toDos = cleanToDos;
  }
  if (ulType === "js-doneToDoList") {
    const cleanDoneToDos = doneToDos.filter(
      (toDo) => toDo.id !== parseInt(li.id)
    );
    // console.log(cleanDoneToDos);
    // console.log(li);
    doneToDos = cleanDoneToDos;
    // console.log(doneToDos);
  }
  saveToDo();

  if (btnType === "doneBtn") {
    let span = li.childNodes[0];
    if (ulType === "js-doneToDoList") {
      paintToDo(span.innerText, parseInt(li.id));
    } else {
      // console.log(span.innerText);
      doneToDo(span.innerText, parseInt(li.id));
    }
  }
};

const doneToDo = (text, originalId) => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const doneBtn = document.createElement("button");
  const span = document.createElement("span");

  let toDoId;
  if (originalId !== undefined) {
    toDoId = originalId;
  } else {
    toDoId = Date.now();
  }
  li.id = toDoId;
  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.classList.add("delBtn");
  delBtn.addEventListener("click", deleteToDo);
  doneBtn.innerText = "✅";
  doneBtn.classList.add("doneBtn");
  doneBtn.addEventListener("click", deleteToDo);

  li.append(span, delBtn, doneBtn);
  doneToDoList.appendChild(li);

  const doneToDosObj = {
    text,
    id: toDoId,
  };
  doneToDos.push(doneToDosObj);
  saveToDo();
};

const paintToDo = (text, originalId) => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const doneBtn = document.createElement("button");
  const span = document.createElement("span");

  let toDoId;
  if (originalId !== undefined) {
    toDoId = originalId;
  } else {
    toDoId = Date.now();
  }
  li.id = toDoId;
  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.classList.add("delBtn");
  delBtn.addEventListener("click", deleteToDo);
  doneBtn.innerText = "✅";
  doneBtn.classList.add("doneBtn");
  doneBtn.addEventListener("click", deleteToDo);

  li.append(span, delBtn, doneBtn);
  toDoList.appendChild(li);

  const toDosObj = {
    text,
    id: toDoId,
  };
  toDos.push(toDosObj);
  saveToDo();
};

const handleToDoSubmit = (e) => {
  e.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
};

const loadToDos = () => {
  const currentValue = localStorage.getItem(TODOLIST_LS);
  const currentDoneValue = localStorage.getItem(DONELIST_LS);
  if (currentValue !== null) {
    const parsedToDos = JSON.parse(currentValue);
    parsedToDos.forEach((v) => {
      paintToDo(v.text, v.id);
    });
  }

  if (currentDoneValue !== null) {
    const parsedDoneToDos = JSON.parse(currentDoneValue);
    parsedDoneToDos.forEach((v) => {
      doneToDo(v.text, v.id);
    });
  }
};

const toDoInit = () => {
  loadToDos();
  toDoForm.addEventListener("submit", handleToDoSubmit);
};

toDoInit();
