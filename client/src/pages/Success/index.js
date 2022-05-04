import { useEffect } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { idbPromise } from '../../utils/helpers';

function Success() {

    useEffect(() => {
        async function saveOrder() {
            const cart = await idbPromise('cart', 'get');
            const products = cart.map((item) => item._id);

            if (products.length) {

                cart.forEach((item) => {
                    idbPromise('cart', 'delete', item);
                });
            }
        }

        saveOrder();
    });


    return (
        <div>
            <Jumbotron>
                <h1>Success!</h1>
                <h2>Thank you  so much for your purchase!</h2>
                <h2>Links to your images will be sent to your email within 1 business day!</h2>

            </Jumbotron>
        </div>
    );
}

export default Success;
