function GoodsItem(props) {
    const {addToBasket, displayName, displayDescription, mainId} = props;
    const price = props.price.regularPrice;
    const background = props.displayAssets[0].background;

    return (
        <div className="card">
            <div className="card-image">
                <img src={background} />
            </div>
            <div className="card-content">
                 <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button className="btn" onClick={() => addToBasket({
                    mainId, displayName, price
                })}>Buy</button>
                <span className="right">{price}</span>
            </div>
        </div>
    );
}

export default GoodsItem;