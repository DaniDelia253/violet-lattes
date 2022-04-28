import React from "react";

function Detail() {

    const product =
    {
        name: 'hidden bouquet',
        image: 'img1.png',
        price: 5.00
    }


    return (
        <div className='detailContainer'>
            <img className='detailImg' src={`/images/previews/${product.image}`} alt={product.name} />
            <div className='detailTextContainer'>
                <h1 className="card-title">{product.name}</h1>
                <h1 className="card-text">${product.price}</h1>
            </div>

            {/* <a href="" className="btn btn-primary">Go somewhere</a> */}
        </div>


    );
}

export default Detail;
