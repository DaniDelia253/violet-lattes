import { useEffect } from "react";
import CartItem from "../CartItem";
import Auth from '../../utils/auth'
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Link } from "react-router-dom";



const Cart = () => {

    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise('cart', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
        };

        if (!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    function calculateTotal() {
        let sum = 0;
        state.cart.forEach(item => {
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    return (

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">My Cart</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {state.cart.length ? (
                    <div className=''>
                        {state.cart.map(item => (
                            <CartItem key={item._id} item={item} />
                        ))}
                        <div className=" checkoutTotalContainer">
                            <strong>Total: ${calculateTotal()}</strong>

                            {
                                Auth.loggedIn() ?
                                    <button className='addToCartMainBtn checkoutBtn' >
                                        Checkout
                                    </button>
                                    :
                                    <span>
                                        <Link className='addToCartMainBtn checkoutBtn' to="/login">
                                            Log in to checkout!
                                        </Link>
                                    </span>
                            }
                        </div>

                    </div>
                ) : (
                    <div className='cartContainer'>
                        <h6>
                            You haven't added anything to your cart yet!
                        </h6>
                        <img className='cartErrImg' alt='error- add items!' src='/images/err/404err.jpeg'></img>
                        <h6>
                            Add some stuff and then come back!
                        </h6>
                    </div>
                )}
            </div>
        </div>

    );
};

export default Cart;
