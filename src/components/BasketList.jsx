import BasketItem from "./BasketItem";

function BasketList(props) {
    const {order, basketShow, removeFromBasket} = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">
                Cart
            </li>
            {
                order.length ? order.map(item => {
                    return <BasketItem key={item.mainId} {...item}
                        removeFromBasket={removeFromBasket}/>
                }) : <li className="collection-item">Nothing</li>
            }
            <li className="collection-item active">
                Prices: {totalPrice}
            </li>
            <li className="collection-item active">
                <button className="btn btn-small">checkout</button>
            </li>
            <i className="material-icons basket-close" 
                onClick={basketShow}>close</i>
      </ul>
    );
}

export default BasketList;