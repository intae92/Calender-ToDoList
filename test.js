// 사전에서 첫 번째 단어는 A이고, 그다음은 AA, AAA, AAAA, AAAAA, AAAAE, ... 와 같습니다. AAAAE는 사전에서 6번째 단어입니다.

// const solution = (word) => {
//   const alphabet = ["A", "E", "I", "O", "U"];
//   const maxLength = 5;
//   let result = [];
//   const permute = (array, maxLength, inputArr, result) => {
//     result.push(JSON.parse(JSON.stringify(array)));
//     if (array.length === maxLength) {
//       // result.push(JSON.parse(JSON.stringify(array)));
//       return;
//     }
//     for (let str of inputArr) {
//       array.push(str);
//       permute(array, maxLength, inputArr, result);
//       array.pop();
//     }
//   };
//   permute([], maxLength, alphabet, result);
//   result = result.map((v) => v.join(""));
//   return result.indexOf(word);
// };

// const word = "AAAAE";
// solution(word);

////
// const solution = (board) => {
//   const size = board.length;
//   let count = 0;
//   let result = [];

//   const pushPoint = (point) => {
//     // if(!result.includes(point)) result.push(point);
//     // console.log(point);

//     let str = "" + point[0] + "" + point[1] + "" + point[2] + "" + point[3];
//     let str2 = "" + point[2] + "" + point[3] + "" + point[0] + "" + point[1];

//     if (!result.includes(str) && !result.includes(str2)) result.push(str);
//     // if (!result.includes(str2)) result.push(str2);
//     return;
//   };

//   const move = (newBoard, pointA, pointB) => {
//     let temp = newBoard[pointA[0]][pointA[1]];
//     newBoard[pointA[0]][pointA[1]] = newBoard[pointB[0]][pointB[1]];
//     newBoard[pointB[0]][pointB[1]] = temp;
//     let x = pointA[0],
//       y = pointA[1];
//     if (
//       x - 2 >= 0 &&
//       newBoard[x][y] === newBoard[x - 1][y] &&
//       newBoard[x - 1][y] === newBoard[x - 2][y]
//     )
//       pushPoint([...pointA, ...pointB]); //상
//     if (
//       x + 2 < size &&
//       newBoard[x][y] === newBoard[x + 1][y] &&
//       newBoard[x + 1][y] === newBoard[x + 2][y]
//     )
//       pushPoint([...pointA, ...pointB]); //하
//     if (
//       y - 2 >= 0 &&
//       newBoard[x][y] === newBoard[x][y - 1] &&
//       newBoard[x][y - 1] === newBoard[x][y - 2]
//     )
//       pushPoint([...pointA, ...pointB]); //좌
//     if (
//       y + 2 < size &&
//       newBoard[x][y] === newBoard[x][y + 1] &&
//       newBoard[x][y + 1] === newBoard[x][y + 2]
//     )
//       pushPoint([...pointA, ...pointB]); //우
//     if (
//       x - 1 >= 0 &&
//       x + 1 < size &&
//       newBoard[x][y] === newBoard[x - 1][y] &&
//       newBoard[x + 1][y] === newBoard[x][y]
//     )
//       pushPoint([...pointA, ...pointB]); //세로
//     if (
//       y - 1 >= 0 &&
//       y + 1 < size &&
//       newBoard[x][y] === newBoard[x][y - 1] &&
//       newBoard[x][y + 1] === newBoard[x][y]
//     )
//       pushPoint([...pointA, ...pointB]); //가로
//     return;
//   };
//   for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//       if (i - 1 >= 0)
//         move(JSON.parse(JSON.stringify(board)), [i, j], [i - 1, j]); //상
//       if (i + 1 < size)
//         move(JSON.parse(JSON.stringify(board)), [i, j], [i + 1, j]); //하
//       if (j - 1 >= 0)
//         move(JSON.parse(JSON.stringify(board)), [i, j], [i, j - 1]); //좌
//       if (j + 1 < size)
//         move(JSON.parse(JSON.stringify(board)), [i, j], [i, j + 1]); //우
//     }
//   }
//   // move([...board.slice()]);
//   // console.log(result);
//   if (result.length === 0) return -1;
//   return result.length;
// };

// const board = [
//   [1, 1, 4, 3],
//   [3, 2, 1, 4],
//   [3, 1, 4, 2],
//   [2, 1, 3, 3],
// ];
// solution(board);

////

// const solution = (n, network, repair) => {
//   const routeObj = {};
//   for (let i of network) {
//     routeObj[i[0]] === undefined
//       ? (routeObj[i[0]] = [i[1]])
//       : routeObj[i[0]].push(i[1]);
//     routeObj[i[1]] === undefined
//       ? (routeObj[i[1]] = [i[0]])
//       : routeObj[i[1]].push(i[0]);
//   }

//   console.log(routeObj);
// };

// // 10
// const n = 6,
//   network = [
//     [1, 2],
//     [3, 5],
//     [4, 2],
//     [5, 6],
//   ],
//   repair = [
//     [3, 2, 10],
//     [5, 4, 15],
//   ];

// // -1
// // const n = 4,
// //   network = [[1, 2]],
// //   repair = [
// //     [2, 3, 10],
// //     [3, 1, 12],
// //   ];
// solution(n, network, repair);

const today = new Date();
const 