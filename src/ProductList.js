
import React from 'react'
// Add and Remove the Product List...
const ProductList = ({ cart, setCart, product }) => {

    window.scrollTo(0, 0)
    const { url, title, description, price, isInCart } = product;
    // Add to cart function
    const addToCart = (prod) => {
        prod.isInCart = true;
        setCart([...cart, prod]);
    }
    // Remove from cart function
    const removeFromCart = (prod) => {
        prod.isInCart = false;
        const updatedCart = cart?.filter((item) => item !== prod)
        setCart(updatedCart)
    }

    // mapping the product list....
    return (
        <div className="card mb-3 d-flex justify-content-center align-items-center text-center border-0 m-4 pt-3">
            <img src={url} width="100%" height='300px' />
            <div className='card-body'>
                <h4 className="card-title">{title}</h4>
                <p className='card-text'>{description}</p>
                <p className='card-text'>Price: ₹{price}</p>
                {isInCart ? (<button onClick={() => removeFromCart(product)} className="btn btn-danger">Remove from Cart </button>)
                    : (<button onClick={() => addToCart(product)} className="btn btn-warning">Add To Cart </button>)
                }
            </div>
        </div>
    )
}

export default ProductList;