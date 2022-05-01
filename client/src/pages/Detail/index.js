import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { QUERY_PRODUCT } from '../../utils/queries'


function Detail() {

    const { id: productId } = useParams();

    const { loading, data } = useQuery(QUERY_PRODUCT, {
        variables: { id: productId }
    })

    const product = data?.product || {}

    if (loading) {
        return <div>one sec...</div>
    }

    return (
        <div className='detailContainer'>
            <img className='detailImg' src={`/images/previews/${product.image}`} alt={product.name} />
            <div className='detailTextContainer'>
                <h1 className="card-title">{product.name}</h1>
                <h1 className="card-text">${product.price}</h1>
            </div>

        </div>


    );
}

export default Detail;
