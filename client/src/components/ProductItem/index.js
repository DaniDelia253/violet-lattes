import { useState } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";


function ProductItem(props) {

    const [state, dispatch] = useStoreContext();

    const [message, setMessage] = useState("")

    const {
        image,
        name,
        _id,
        price,
        quantity
    } = props;

    // const { cart } = state.cart


    const addToCart = () => {
        const itemInCart = state.cart.find((cartItem) => cartItem._id === props.product._id);
        if (itemInCart) {
            setMessage("This is already in your cart!")
        } else {
            setMessage('Added to your cart!')

            dispatch({
                type: ADD_TO_CART,
                product: { ...props.product, purchaseQuantity: 1 }
            });
            idbPromise('cart', 'put', { ...props.product, purchaseQuantity: 1 });
        }
    }

    return (

        <div>
            <div className="card">
                <Link
                    to={`/products/${props.product._id}`}
                    className='linkText'
                >
                    <img className='productImg card-img-top' src={`/images/previews/${props.product.image}`} alt={props.product.name} />
                    <div className="card-body">
                        <h5 className="card-title linkText">{props.product.name}</h5>
                        <p className="card-text linkText">${props.product.price}</p>
                    </div>
                </Link>
                <button className='addToCartMainBtn' onClick={addToCart}>Add to cart</button>
                <p className='productMessage'>{message}</p>
            </div>
        </div>
    )
}

export default ProductItem;
