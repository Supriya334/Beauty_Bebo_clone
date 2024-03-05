function Cart() {
    return (
        <>
            <h6>SHOPPING CART </h6>
            <div className="Product-by">
                <div className="item">
                    <span>ITEM </span>
                    <span > <span>PRICE</span>
                        <span>QTY</span>
                        <span>SUBBTOTAL</span> </span>
                </div>

                <div className="item">
                <img src="https://www.beautybebo.com/pub/media/catalog/product/cache/c9615af5e5a6f27d0b9239c1928d8610/6/1/613f25a8904086380051_0.jpg" alt="" />
                <span>VEGA NATURAL</span>
                <span> <span>440</span>
                        <span>1</span>
                        <span>440</span></span>
                 
                </div>

            </div>
<button className="shopping"> <a href="http://localhost:3000/product">CONTINUE SHOPPING</a></button>
<button className="shopping"> <a href="http://localhost:3000/checkOut">Payment </a></button>

        </>
    )
}

export default Cart;