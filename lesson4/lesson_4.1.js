{
    let number = +prompt("Введите число от 0 до 999");
    function objNamber(number) {
        if (!Number.isInteger(number) || number > 999 || number < 0) {
            number = +prompt("Введите число от 0 до 999");
            return {}
        }
        return {
            единицы: number % 10,
            десятки: Math.floor(number / 10) % 10,
            сотни: Math.floor(number / 100) % 10,
        };
    }
    console.log(objNamber(number));
}
