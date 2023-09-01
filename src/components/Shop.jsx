import {useState, useEffect} from 'react';
import {API_KEY, API_URL} from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setIsBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const closeAlert = () => {
        setAlertName('');
    }
    
    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.mainId === item.id);

        if(itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
        setAlertName(item.displayName);
    }

    const removeFromBasket = (itemId) => {
        const newOrder = order.filter(item => item.mainId !== itemId);
        setOrder(newOrder);
    }

    const basketShow = () => {
        setIsBasketShow(!isBasketShow);
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
        .then(res => res.json())
        .then(data => {
             data.shop && setGoods(data.shop);
             setLoading(false);
        })
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length} basketShow={basketShow}/>
            {
                loading ? <Preloader/> : <GoodsList goods={goods} 
                                            addToBasket={addToBasket}/>
            }
            {
                isBasketShow && <BasketList order={order} basketShow={basketShow}
                                removeFromBasket={removeFromBasket}/>
            }
            {
                alertName && <Alert displayName={alertName} closeAlert={closeAlert}/>
            }
        </main>
    );
}

export default Shop;