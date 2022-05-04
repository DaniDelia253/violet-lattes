import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { QUERY_PRODUCT } from '../../utils/queries'
import { ADD_TO_CART } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import { idbPromise } from '../../utils/helpers'




function Detail() {
    const [state, dispatch] = useStoreContext();
    const [message, setMessage] = useState("")


    const { id: productId } = useParams();

    const { loading, data } = useQuery(QUERY_PRODUCT, {
        variables: { id: productId }
    })

    const product = data?.product || {}
    console.log(product)

    if (loading) {
        return <div>one sec...</div>
    }

    const addToCart = () => {
        const itemInCart = state.cart.find(cartItem => cartItem._id === product._id);

        if (itemInCart) {
            setMessage("This is already in your cart!")
        } else {
            setMessage('Added to your cart!')

            dispatch({
                type: ADD_TO_CART,
                product: { ...product, purchaseQuantity: 1 }
            });
            // if product isn't in the cart yet, add it to the current shopping cart in IndexedDB
            idbPromise('cart', 'put', { ...product, purchaseQuantity: 1 });
        }
    }

    return (
        <div className='detailContainer'>
            <img className='detailImg' src={`/images/previews/${product.image}`} alt={product.name} />
            <div className='detailTextContainer'>
                <h1 className="card-title detail-text">{product.name}</h1>
                <h1 className="card-text detail-text">${product.price}</h1>
                <button className='addToCartDetailBtn' onClick={addToCart}>Add to Cart</button>
                <p className='detailProductMessage'>{message}</p>


            </div>

        </div>


    );
}

export default Detail;
