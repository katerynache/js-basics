{
    const basket = [
        ['кепка', 2, 100],
        ['пояс', 3, 180],
    ]
    function basketPraice(basket) {
        let commonPraice = 0;
        for (let i = 0; i < basket.length; i++) {
            commonPraice += basket[i][1] * basket[i][2]
        }
        return commonPraice;
    }
}