const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const doneToDoList = document.querySelector(".js-doneToDoList");
const calender__table__toDo = document.querySelector(".calender--table");
const tbody__toDo = calender__table__toDo.querySelector("tbody");
const calender__header__title = document.querySelector(".calender--title");
const ul__list = document.querySelector(".js-toDoList");
const ul__list__done = document.querySelector(".js-doneToDoList");

const TODOLIST_LS = "toDoList";
const DONELIST_LS = "doneList";
let toDos = [];
let doneToDos = [];
let targetDay__toDos = [];
let targetDay__doneToDos = [];
let isDayClick = true; //다른 날짜 클릭시 중복 저장 막기 위해서

const today__toDo = new Date();
const today_yearId = today__toDo.getFullYear();
const today_monthId = today__toDo.getMonth() + 1;
const today_dayId = today__toDo.getDate();
let targetDay__toDoId = `${today_yearId}${
  today_monthId < 10 ? `0${today_monthId}` : today_monthId
}${today_dayId < 10 ? `0${today_dayId}` : today_dayId}`;

const saveToDo = () => {
  localStorage.setItem(TODOLIST_LS, JSON.stringify(toDos));
  localStorage.setItem(DONELIST_LS, JSON.stringify(doneToDos));
};

const deleteToDo = (e) => {
  isDayClick = true;
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
  isDayClick = false;
};

const doneToDo = (text, originalId, day, isDayClickValue) => {
  isDayClick = isDayClickValue || isDayClick;
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

  const doneToDosObj = {
    text,
    id: toDoId,
    date: day || targetDay__toDoId,
  };
  li.append(span, delBtn, doneBtn);
  if (doneToDosObj["date"] === targetDay__toDoId) doneToDoList.appendChild(li);
  if (isDayClick) {
    doneToDos.push(doneToDosObj);
    saveToDo();
  }
};

//todo list 에 있는 값과 달력에 있는 값 맞추기
const paintToDo = (text, originalId, day, isDayClickValue) => {
  isDayClick = isDayClickValue || isDayClick;

  console.log("paint", day, isDayClick);
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

  const toDosObj = {
    text,
    id: toDoId,
    date: day || targetDay__toDoId,
  };

  li.append(span, delBtn, doneBtn);
  if (toDosObj["date"] === targetDay__toDoId) toDoList.appendChild(li);

  if (isDayClick) {
    toDos.push(toDosObj);
    saveToDo();
  }
};

const handleToDoSubmit = (e) => {
  e.preventDefault();
  isDayClick = true;
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
};

const loadToDos = () => {
  console.log("loadtargetDay__toDoId", targetDay__toDoId);
  const currentValue = localStorage.getItem(TODOLIST_LS);
  const currentDoneValue = localStorage.getItem(DONELIST_LS);
  let ul__list__li = ul__list.children;
  while (ul__list__li.length > 0) {
    ul__list.removeChild(ul__list__li[0]);
  }
  let ul__list__li__done = ul__list__done.children;
  console.log(ul__list__li__done);

  while (ul__list__li__done.length > 0) {
    ul__list__done.removeChild(ul__list__li__done[0]);
  }

  if (currentValue !== null) {
    const parsedToDos = JSON.parse(currentValue);
    parsedToDos.forEach((v) => {
      paintToDo(v.text, v.id, v.date, isDayClick);
    });
  }

  if (currentDoneValue !== null) {
    const parsedDoneToDos = JSON.parse(currentDoneValue);

    parsedDoneToDos.forEach((v) => {
      doneToDo(v.text, v.id, v.date, isDayClick);
    });
  }
};
const handleTbody__toDo = (e) => {
  isDayClick = false;

  let ul__list__li = ul__list.children;
  while (ul__list__li.length > 0) {
    ul__list.removeChild(ul__list__li[0]);
  }
  let ul__list__li__done = ul__list__done.children;
  console.log(ul__list__li__done);

  while (ul__list__li__done.length > 0) {
    ul__list__done.removeChild(ul__list__li__done[0]);
  }

  // let target = e.target;
  let targetId = e.target.parentNode.id || e.target.parentNode.parentNode.id;
  // console.log("targetId", targetId);
  if (targetId !== "") targetDay__toDoId = targetId;
  targetDay__toDos = toDos.filter((v) => v.date === targetId);
  targetDay__doneToDos = doneToDos.filter((v) => v.date === targetId);
  targetDay__toDos.forEach((v) => {
    paintToDo(v.text, v.id, v.date, isDayClick);
  });
  targetDay__doneToDos.forEach((v) => {
    doneToDo(v.text, v.id, v.date, isDayClick);
  });
  // targetDay__toDos.forEach((v) => {
  //   paintToDoTarget(v.text, v.id, v.date);
  // });
};

//달력 넘기는 버튼 클릭시 todoList 리셋
const handleCalenderTitle__toDoReset = (e) => {
  if (e.target.id === "left--btn" || e.target.id === "right--btn") {
    let ul__list__li = ul__list.children;
    while (ul__list__li.length > 0) {
      ul__list.removeChild(ul__list__li[0]);
    }
    let ul__list__li__done = ul__list__done.children;
    while (ul__list__li__done.length > 0) {
      ul__list__done.removeChild(ul__list__li__done[0]);
    }
  }
};
const toDoInit = () => {
  loadToDos();
  toDoForm.addEventListener("submit", handleToDoSubmit);
  tbody__toDo.addEventListener("click", handleTbody__toDo);
  calender__header__title.addEventListener(
    "click",
    handleCalenderTitle__toDoReset
  );
};

toDoInit();
