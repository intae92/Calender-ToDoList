const calender__container = document.querySelector(".js-calender__container");
const calender__title = document.querySelector(".calender--title");
const title = calender__title.querySelector("span");
const calender__table = document.querySelector(".calender--table");
const tbody = calender__table.querySelector("tbody");
const toDoListDay = document.querySelector("#toDoList--day");
const TODO_LS = "toDoList";
const DONE_LS = "doneList";

const ONE_WEEK = 7;
let thisYear, thisMonth, thisDay, targetDay;
let days = [],
  daysTable = [];

const paintToDoListDay = (day) => {
  toDoListDay.innerText = `${day}일`;
};

const paintTitle = (year, month) => {
  title.innerText = `${year}년 ${month}월`;
};

const paintCalenderTable = (year, month, title) => {
  console.log("paintCalenderTable year month", year, month);
  // const dayName = ["일", "월", "화", "수", "목", "금", "토"];
  const dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const calenderCellCount = 42;
  const today = new Date();
  const today_year = today.getFullYear();
  const today_month = today.getMonth() + 1;
  const today_day = today.getDate();
  thisDay = today_day; //오늘 몇일

  console.log(today_year, today_month, today_day);
  console.log(
    `${today_year}${today_month < 10 ? `0${today_month}` : today_month}${
      today_day < 10 ? `0${today_day}` : today_day
    }`
  );
  days = []; //지정된 월의 달력 페이지에 출력될 날짜
  daysTable = []; //달력을 만들기 위한 table에 맞춘 날짜 데이터 set
  thisYear = year;
  thisMonth = month;

  paintTitle(thisYear, thisMonth + 1); //달력 년, 월 텍스트로 보이게
  paintToDoListDay(thisDay);

  //저번달 마지막날
  const lastMonthLastDate = new Date(year, month, 0);
  const lastMOnthLastDate_year = lastMonthLastDate.getFullYear();
  const lastMOnthLastDate_month = lastMonthLastDate.getMonth() + 1;
  const lastMonthLastDate_date = lastMonthLastDate.getDate();
  const lastMonthLastDate_day = lastMonthLastDate.getDay();

  // console.log(lastMonthLastDate_date);

  //이번달 첫날
  const thisMonthFirstDate = new Date(year, month);
  const thisMonthFirstDate_year = thisMonthFirstDate.getFullYear();
  const thisMonthFirstDate_month = thisMonthFirstDate.getMonth() + 1;
  const thisMonthFirstDate_date = thisMonthFirstDate.getDate();
  const thisMonthFirstDate_day = thisMonthFirstDate.getDay();

  //이번달 마지막날
  const thisMonthLastDate = new Date(year, month + 1, 0);
  const thisMonthLastDate_year = thisMonthLastDate.getFullYear();
  const thisMonthLastDate_month = thisMonthLastDate.getMonth() + 1;
  const thisMonthLastDate_date = thisMonthLastDate.getDate();
  const thisMonthLastDate_day = thisMonthLastDate.getDay();
  //   console.log(thisMonthLastDate_day);

  //다음달
  const nextMonthDate = new Date(year, month + 1);
  const nextMonthDate_year = nextMonthDate.getFullYear();
  const nextMonthDate_month = nextMonthDate.getMonth() + 1;

  const calenderStartNumber =
    lastMonthLastDate_date - thisMonthFirstDate_day + 1;
  const calenderLastNumber =
    calenderCellCount -
    (lastMonthLastDate_date - calenderStartNumber + 1 + thisMonthLastDate_date);

  //저번달
  for (let i = calenderStartNumber; i <= lastMonthLastDate_date; i++) {
    let daysId = `${lastMOnthLastDate_year}${lastMOnthLastDate_month}${
      i < 10 ? `0${i}` : i
    }_${i}_td-lastMonth`;
    days.push(daysId);
  }

  //이번달
  for (let i = thisMonthFirstDate_date; i <= thisMonthLastDate_date; i++) {
    let daysId = `${thisMonthFirstDate_year}${
      thisMonthFirstDate_month < 10
        ? `0${thisMonthFirstDate_month}`
        : thisMonthFirstDate_month
    }${i < 10 ? `0${i}` : i}_${i}_td-thisMonth`;
    days.push(daysId);
  }

  //다음달
  for (let i = 1; i <= calenderLastNumber; i++) {
    let daysId = `${nextMonthDate_year}${
      nextMonthDate_month < 10 ? `0${nextMonthDate_month}` : nextMonthDate_month
    }${i < 10 ? `0${i}` : i}_${i}_td-nextMonth`;
    days.push(daysId);
  }
  // console.log(days);

  //table 형식의 날짜 데이터 만들기
  let rowArr = [];
  for (let i = 0; i < days.length; i++) {
    rowArr.push(days[i]);
    if (rowArr.length === 7) {
      daysTable.push(rowArr);
      rowArr = [];
    }
  }

  // console.log(daysTable);
  //table 만들기
  for (let row = 0; row < 6; row++) {
    let tr = document.createElement("tr");
    for (let col = 0; col < 7; col++) {
      let date = daysTable[row][col].split("_");

      let td = document.createElement("td");
      let dateDiv = document.createElement("div");
      let todoDiv = document.createElement("div");
      let doneDiv = document.createElement("div");
      let dateSpan = document.createElement("span");

      dateDiv.classList.add("table-td-dateDiv");
      todoDiv.classList.add("table-td-todoDiv");
      doneDiv.classList.add("table-td-doneDiv");

      //달력 칸안에 월 표기
      if (date[1] === "1") {
        let oneDayTitle = new Date(
          date[0].slice(0, 4),
          date[0].slice(4, 6),
          1,
          1,
          00,
          00,
          00
        );
        dateSpan.innerText = `${
          oneDayTitle.getMonth() < 1 ? 12 : oneDayTitle.getMonth()
        }월 1일`;
      } else {
        dateSpan.innerText = `${date[1]}`;
      }

      //오늘 날짜 색으로 표시하기
      if (
        date[0] ===
        `${today_year}${today_month < 10 ? `0${today_month}` : today_month}${
          today_day < 10 ? `0${today_day}` : today_day
        }`
      ) {
        dateSpan.classList.add("today--day");
      }

      dateDiv.appendChild(dateSpan);
      td.append(dateDiv, todoDiv, doneDiv);
      td.id = date[0];
      td.classList.add(date[2]);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  // console.log("daysTable", daysTable);
};

// 데이터 리셋
const resetTable = () => {
  days = [];
  daysTable = [];
  console.log("resetTable");
  for (let i = 1; i <= 6; i++) {
    tbody.removeChild(tbody.children[1]);
  }
};

//한달 전
const handleLastMonth = (e) => {
  console.log("handleLastMonth");
  let lastYear = thisYear;
  let lastMonth = thisMonth - 1;
  if (lastMonth === -1) {
    lastMonth = 11;
    lastYear -= 1;
  }
  // console.log(lastYear, lastMonth, thisYear, thisMonth);
  resetTable();
  paintCalenderTable(lastYear, lastMonth);
};

//한달 후
const handleNextMonth = (e) => {
  console.log("handleNextMonth");
  let nextYear = thisYear;
  let nextMonth = thisMonth + 1;
  if (nextMonth === 12) {
    nextMonth = 0;
    nextYear += 1;
  }
  // console.log(thisYear, thisMonth, nextYear, nextMonth);
  resetTable();
  paintCalenderTable(nextYear, nextMonth);
};

//달력 넘기기 controller
const turn_over_the_calender = () => {
  console.log("turn_over_the_calender");
  const calenderHeader = calender__title.children;
  const title = calenderHeader[0];
  const leftBtn = calenderHeader[1].children[0];
  const rightBtn = calenderHeader[1].children[1];
  leftBtn.addEventListener("click", handleLastMonth);
  rightBtn.addEventListener("click", handleNextMonth);
  // rightBtn = addEventListener("click", handleRightMonth);
};

const paintTable = () => {
  console.log("paintTable");
  const today = new Date();
  thisYear = today.getFullYear();
  thisMonth = today.getMonth();
  paintCalenderTable(thisYear, thisMonth);
  turn_over_the_calender(); //달력 넘기기
  // calenderPaint(thisYear, thisMonth);
};

const handleTbody = (e) => {
  // let target = e.target;
  let targetId = e.target.parentNode.id || e.target.parentNode.parentNode.id;
  // console.log("targetId", targetId);
  if (targetId !== "") targetDay = targetId;
  paintToDoListDay(parseInt(targetDay.slice(6, 8)));
};
const loadTable = () => {
  paintTable();
};

//300x400
const calenderInit = () => {
  loadTable();
  tbody.addEventListener("click", handleTbody);
};
calenderInit();
