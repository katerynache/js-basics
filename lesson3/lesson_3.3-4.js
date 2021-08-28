{
    for (let i = 0; i < 10; console.log(i++)) {

    }
}
{
    let b = '';
    for (let i = 0; i < 20; i++) {
        b += '*';
        for (let j = 0; j < i; j++) {
            b += '*';
        }
        b += '\n'
    }
    console.log(b);
}