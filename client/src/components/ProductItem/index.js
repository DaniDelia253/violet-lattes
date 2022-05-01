import { Link } from "react-router-dom";

function ProductItem(props) {

    console.log(props)

    return (

        <div>
            <Link
                to={`/products/${props.product._id}`}
                className='linkText'
            >
                <div className="card">
                    <img className='productImg card-img-top' src={`/images/previews/${props.product.image}`} alt={props.product.name} />
                    <div className="card-body">
                        <h5 className="card-title linkText">{props.product.name}</h5>
                        <p className="card-text linkText">${props.product.price}</p>
                        {/* <a href="" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductItem;
