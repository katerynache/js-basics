{
    const basket = {
        goods: [
            {
                id: 125,
                productName: "кепка",
                price: 100,
                quantily: 2
            },
            {
                id: 126,
                productName: "пояс",
                price: 180,
                quantily: 3
            },
        ],
        countBasketPrice() {
            return this.goods.reduce(function callback(prev, current) {
                return prev + current.price * current.quantily
            }, 0);
        },
        // countBasketPrice() {
        //     return this.goods.reduce(function callback(totalPrice, cartItem) {
        //         return totalPrice + cartItem.price * cartItem.quantily
        //     }, 0);
        // },
    };
    console.log(basket.countBasketPrice());
}
