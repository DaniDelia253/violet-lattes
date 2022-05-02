import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";


const CartItem = ({ item }) => {

    const [, dispatch] = useStoreContext();

    const removeFromCart = item => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id
        });
        idbPromise('cart', 'delete', { ...item });
    };

    return (
        <div className="flex-row cartItem">
            <div>
                <img
                    src={`/images/previews/${item.image}`}
                    alt=""
                    className='cartImg'
                />
            </div>
            <div className='cartIconTextContainer'>
                <div>{item.description} ${item.price}</div>
                <div>
                    <span
                        className='trashIcon'
                        role="img"
                        aria-label="trash"
                        onClick={() => removeFromCart(item)}

                    >
                        🗑
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;