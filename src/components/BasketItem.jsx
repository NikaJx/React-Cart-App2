function BasketItem(props) {
    const price = props.price.regularPrice;
    const {displayName, quantity, removeFromBasket, mainId} = props;

    return (
        <li className="collection-item">
            {displayName} x{quantity} = {price}
            <span className="secondary-content" onClick={() => removeFromBasket(mainId)}>
                <i className="material-icons basket-del">close</i>
            </span>
        </li>
    );
}

export default BasketItem;