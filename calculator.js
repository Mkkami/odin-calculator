



function add(a,b) {
    return a+b;
}

function sub(a,b) {
    return a-b;
}

function divide(a,b) {
    if (b == 0) {
        return 'Universe exploded.'
    }
    return a/b;
}

function mult(a,b) {
    return a*b;
}

function operate(num1, num2, operator) {
    switch(operator) {
        case '+': 
            return add(num1, num2);
            break;    
        case '-':
            return sub(num1, num2);
            break;
        case '*':
            return mult(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        default:
            console.log("How did you get here?");
    }
}

console.log(divide(10, 0));

console.log(operate(2, 10, '*'));
console.log(operate(2, 0, '/'));