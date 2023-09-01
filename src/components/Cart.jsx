function Cart(props) {
    const {quantity = 0, basketShow} = props;

    return (
        <div className="cart deep-purple darken-4 white-text" onClick={basketShow}>
            <i className="material-icons">local_grocery_store</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    );
}   

export default Cart;