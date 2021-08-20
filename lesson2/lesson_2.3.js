{
    let a = ((Math.random() < 0.5) ? -1 : 1) * Math.floor(Math.random() * 100);
    let b = ((Math.random() < 0.5) ? -1 : 1) * Math.floor(Math.random() * 100);
    console.log(a, b);
    if (a >= 0 && b >= 0) {
        console.log(a - b);
    } else if (a < 0 && b < 0) {
        console.log(a * b);
    } else {
        console.log(a + b);
    }
}