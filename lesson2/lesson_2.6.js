function sum(arg1, arg2) {
    return arg1 + arg2;
}
function subtraction(arg1, arg2) {
    return arg1 - arg2;
}
function multiplication(arg1, arg2) {
    return arg1 * arg2;
}
function division(arg1, arg2) {
    return arg1 / arg2;
}
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+': return sum(arg1, arg2);
            break;
        case '-': return subtraction(arg1, arg2);
            break;
        case '/': return division(arg1, arg2);
            break;
        case '*': return division(arg1, arg2);
            break;
    }
}
let arg1 = Math.floor(Math.random() * 100);
let arg2 = Math.floor(Math.random() * 100);
let operation = prompt("Введите одну из операций +, -, *, /");
let result = mathOperation(arg1, arg2, operation);
console.log(result);
// не могу понять, что у меня выводиться в undefined