// import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';

function ProductList() {


    const products = [
        {
            name: 'hidden bouquet',
            image: 'img1.png',
            price: 5.00
        },
        {
            name: 'holly jolly fall',
            image: 'img2.png',
            price: 5.00
        }, {
            name: 'summertime sweater',
            image: 'img3.png',
            price: 5.00
        }, {
            name: 'inked portrait',
            image: 'img4.png',
            price: 5.00
        }, {
            name: 'spacecatmagdalina',
            image: 'img5.png',
            price: 5.00
        }, {
            name: 'girls who lift',
            image: 'img6.png',
            price: 5.00
        }, {
            name: 'bubble tea bops ',
            image: 'img7.png',
            price: 5.00
        }, {
            name: 'be my valentine ',
            image: 'img8.png',
            price: 5.00
        }, {
            name: 'fizzy grape soda ',
            image: 'img9.png',
            price: 5.00
        },

    ]

    return (
        <div>

            <h2 className='pageTitle'>my work:</h2>
            <div className="productPage">
                <div id='productListContainer'>
                    {products.map((product) => (
                        <ProductItem key={product.name} product={product} />
                    ))}
                </div>
            </div>






            {/* {state.products.length ? (
                <div className="flex-row">
                    {filterProducts().map((product) => (
                        <ProductItem
                            key={product._id}
                            _id={product._id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity}
                        />
                    ))}
                </div>
            ) : (
                <h3>You haven't added any products yet!</h3>
            )}
            {loading ? <img src={spinner} alt="loading" /> : null} */}
        </div>
    );
}

export default ProductList;
