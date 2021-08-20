
// {
//     function sum(a, b) {
//         let result = a + b;
//         console.log(result);
//     }
//     function subtraction(a, b) {
//         let result = a - b;
//         console.log(result);
//     }
//     function multiplication(a, b) {
//         let result = a * b;
//         console.log(result);
//     }
//     function division(a, b) {
//         let result = a / b;
//         console.log(result);
//     }
//     let a = Math.floor(Math.random() * 100);
//     let b = Math.floor(Math.random() * 100);
//     sum(a, b);
//     subtraction(a, b);
//     multiplication(a, b);
//     division(a, b);
// }
{

    function sum(a, b) {
        return a + b;
    }
    function subtraction(a, b) {
        return a - b;
    }
    function multiplication(a, b) {
        return a * b;
    }
    function division(a, b) {
        return a / b;
    }
    let a = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    let result1 = sum(a, b);
    let result2 = subtraction(a, b);
    let result3 = multiplication(a, b);
    let result4 = division(a, b);
    console.log(result1, result2, result3, result4);

}