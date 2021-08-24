{
    let i = 0;
    while (i < 100) {
        if (primeNumber(i)) {
            console.log(i);
        }
        i++;
    }
    function primeNumber(a) {
        if (a < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(a); i++) {
            if (a % i === 0) {
                return false;
            }
        }
        return true;
    }

}