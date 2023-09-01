import GoodsItem from "./GoodsItem";

function GoodsList(props) {
    const {goods, addToBasket} = props;

    return (
        <div className="goods">
            {
                goods.map(item => {
                    return <GoodsItem key={item.mainId} {...item} 
                    addToBasket={addToBasket}/>
                })
            }
        </div>
    );
}

export default GoodsList;