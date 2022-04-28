
import CartItem from "../CartItem";


const Cart = () => {



    return (

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">My Cart</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                .....
            </div>
        </div>


        // <div className="cart">
        //     <div className="close" onClick=''><span id='closeBtn'>🆇</span></div>
        //     <h2>Shopping Cart</h2>

        //     {/* {state.cart.length ? (
        //         <div>
        //             {state.cart.map(item => (
        //                 <CartItem key={item._id} item={item} />
        //             ))}

        //             <div className="flex-row space-between">
        //                 <strong>Total: ${calculateTotal()}</strong>

        //                 {
        //                     Auth.loggedIn() ?
        //                         <button>
        //                             Checkout
        //                         </button>
        //                         :
        //                         <span>(log in to check out)</span>
        //                 }
        //             </div>
        //         </div>
        //     ) : (
        //         <h3>
        //             <span role="img" aria-label="shocked">
        //                 😱
        //             </span>
        //             You haven't added anything to your cart yet!
        //         </h3>
        // //     )} */}
        // </div >
    );
};

export default Cart;
