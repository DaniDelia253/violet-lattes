import React from 'react';

const CartItem = ({ item }) => {
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
                    >
                        🗑
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;