// 1.Have a reset (C) button.
// 2.Support all basic operations (+ , - , * , / )
// 3.Support for 'equals' ( = ) button.
// 4.Allow value carrying. i.e 2 * 2 * 2 * 2 * 2  without pressing equals.
// 5.Don't give up!
class Calculator {
    constructor(result, process) {
        this.outputElement = process;//연산과정
        this.outputResult = result;//연산결과
        this.operatorCheck = true;//연산자 두번이상 클릭시,연산자로 = 안되게 하기 위해
        this.equalCheck = false;//= 클릭 했는지 알기 위해
        this.startCheck = false;//상단 연산과정 처음에 안나오게
        this.clear();
    }

    appendNumber(number) {//숫자
        
        if(this.equalCheck){
            this.outputContent = number;
            this.operatorCheck = false;
        }else {
            this.outputContent += number;
        }
        this.operatorCheck = false;
        this.startCheck = true;
    }
    appendOperator(operator) {//연산자 

        if(this.operatorCheck) return false;
        if(this.equalCheck) this.equalCheck = false;
        this.outputContent += operator;
        this.operatorCheck = true;
        
    }
    updateOutput() {//연산과정 출력
        this.outputElement.value = this.outputContent;
        
    }
    updateResult(){//결과 출력
        if(!this.operatorCheck){
            this.outputElement.value = null;
            this.outputResult.value = this.outputContent;
        }
       
    }
    compute(){//계산하기
        if(this.operatorCheck) return
        this.outputContent = eval(this.outputContent);
    }
    clear() { //다 지워버려
        this.outputContent = '';
        this.outputResult.value = 0;
        if(this.startCheck) this.outputElement.value = null;  
        this.operatorCheck = true;
    }
    
}

const btns = document.querySelectorAll("button");
const output = document.querySelector(".js-OperationResult");
const operationProcess = document.querySelector(".js-Operation");
const calculator = new Calculator(output, operationProcess);

btns.forEach(btn => {
    btn.addEventListener("click", function(e){
        
        switch(e.target.dataset.type){
            case "operator":
                if(calculator.appendOperator(btn.innerText)){
                    calculator.updateOutput();
                }
                break;
            case "reset":
                calculator.clear();
                break;
            case "equal":
                calculator.compute();
                calculator.updateOutput();
                calculator.updateResult();
                break;
            default:
                calculator.appendNumber(btn.innerText);
                calculator.updateOutput();
                break;
        }
    });
})


// //--
// import "./styles.css";

// const result = document.querySelector(".js-result");
// const reset = document.querySelector(".js-reset");
// const equals = document.querySelector(".js-equals");
// const numbers = Array.from(document.querySelectorAll(".js-number"));
// const operations = Array.from(document.querySelectorAll(".js-operation"));

// let firstValue = "",
//   firstDone,
//   secondValue = "",
//   secondDone,
//   currentOperation;

// function doOperation() {
//   const intValueA = parseInt(firstValue, 10);
//   const intValueB = parseInt(secondValue, 10);
//   switch (currentOperation) {
//     case "+":
//       return intValueA + intValueB;
//     case "-":
//       return intValueA - intValueB;
//     case "/":
//       return intValueA / intValueB;
//     case "*":
//       return intValueA * intValueB;
//     default:
//       return;
//   }
// }

// function handleNumberClick(e) {
//   const clickedNum = e.target.innerText;
//   if (!firstDone) {
//     firstValue = firstValue + clickedNum;
//     result.innerHTML = firstValue;
//   } else {
//     secondValue = secondValue + clickedNum;
//     result.innerHTML = secondValue;
//     secondDone = true;
//   }
// }

// function calculate() {
//   const operation = doOperation();
//   result.innerHTML = operation;
//   firstValue = operation;
//   secondDone = false;
//   secondValue = "";
// }

// function handleOperationClick(e) {
//   const clickedOperation = e.target.innerText;
//   if (!firstDone) {
//     firstDone = true;
//   }
//   if (firstDone && secondDone) {
//     calculate();
//   }
//   currentOperation = clickedOperation;
// }

// function handleReset() {
//   firstValue = "";
//   secondValue = "";
//   firstDone = false;
//   secondDone = false;
//   currentOperation = null;
//   result.innerHTML = "0";
// }

// function handleEqualsClick() {
//   if (firstDone && secondDone) {
//     calculate();
//   }
// }

// numbers.forEach(function(number) {
//   number.addEventListener("click", handleNumberClick);
// });
// operations.forEach(function(operation) {
//   operation.addEventListener("click", handleOperationClick);
// });
// reset.addEventListener("click", handleReset);
// equals.addEventListener("click", handleEqualsClick);
