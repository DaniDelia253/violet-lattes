
function ProductItem(props) {

    console.log(props)

    return (

        <div>
            <div className="card">
                <img className='productImg card-img-top' src={`/images/previews/${props.product.image}`} alt={props.product.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.product.name}</h5>
                    <p className="card-text">${props.product.price}</p>
                    {/* <a href="" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    )
}

export default ProductItem;
