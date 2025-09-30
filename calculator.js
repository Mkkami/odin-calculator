const digitButtons = document.querySelectorAll('.digit');
const operationButtons = document.querySelectorAll('.operation');

const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const percentButton = document.querySelector("#percent");
const enterButton = document.querySelector("#enter");
const dotButton = document.querySelector('.dot');
const display = document.querySelector("#text-area");

let num1 = 0;
let num2 = 0;
let operator = null;
let nextNumber = false;
display.textContent = 0;

clearButton.addEventListener('click', () => clear());

deleteButton.addEventListener('click', () => del());

percentButton.addEventListener('click', () => percent());

dotButton.addEventListener('click', () => {
    if (!display.textContent.includes('.')){
        display.textContent += '.';
    }
})

operationButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (operator == null) {
            num1 = +display.textContent;
            operator = button.id;
            nextNumber = true;
            return;
        } 
        if (nextNumber) {
            operator = button.id;
            return;
        }
        num2 = +display.textContent;
        operate();
        operator = button.id;
        nextNumber = true;
        checkState();
    })
})

function checkState() {
    console.log(`num1: ${num1} | num2: ${num2} | operator: ${operator}`);
}

enterButton.addEventListener('click', () => {
    if (nextNumber) {
        return;
    }
    num2 = +display.textContent;
    checkState();
    operate();
})

digitButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (display.textContent === '0') {
            display.textContent = button.textContent;
            return;
        }
        if (nextNumber) {
            display.textContent = button.textContent;
            nextNumber = false;
        } else {
            display.textContent += button.textContent;
        }
        
    })
})

function clear() {
    num1 = 0;
    num2 = 0;
    operator = null;
    nextNumber = false;
    display.textContent = 0;
}

function del() {
    if (nextNumber) {
        return;
    }
    let string = display.textContent;
    if (string.length > 1) {
        display.textContent = string.slice(0, -1);
    } else {
        display.textContent = 0;
    }
}

function percent() {
    console.log(display.textContent);
    if (nextNumber) {
        return;
    }
    if (display.textContent != 0) {
        display.textContent = +display.textContent/100;
    }
}

function add(a,b) {
    display.textContent = a+b;
}

function sub(a,b) {
    display.textContent = a-b;
}

function divide(a,b) {
    if (b == '0') {
        clear()
        display.textContent ='Universe exploded.';
        nextNumber = true;
    } else {
        display.textContent = a/b;
    }

}

function mult(a,b) {
    display.textContent = a*b;
}

function operate() {
    
    switch(operator) {
        case 'add': 
            add(num1, num2);
            break;    
        case 'sub':
            sub(num1, num2);
            break;
        case 'mult':
            mult(num1, num2);
            break;
        case 'divide':
            divide(num1, num2);
            break;
        default:
            // action without operator - number and enter
    }
    num1 = +display.textContent;
    nextNumber = true;
}