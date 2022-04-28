// import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';

function ProductList() {

    const images = [
        '/images/previews/img1.png',
        'images/previews/img2.png',
        'images/previews/img3.png',
        'images/previews/img4.png',
        'images/previews/img5.png',
        'images/previews/img6.png',
        'images/previews/img7.png',
        'images/previews/img8.png',
        'images/previews/img9.png',
    ]

    return (
        <div className="">
            <h2 className='pageTitle'>my work:</h2>
            <div id='productListContainer'>
                {images.map((image) => (
                    <ProductItem key={image} pic={image} />
                ))}
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
