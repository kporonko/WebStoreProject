import React from 'react';
import {Link} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";

const PopularProductCard = ({ isAdmin, product, onAdd}) => {
    return (
        <div className="product-div">
            <div className='img-div relative'>
                <div className="rate-div">
                    {product.rating.rate}
                </div>
                <Link to={isAdmin ? `/admin/item/${product.productId}` : `/item/${product.productId}`}>
                    <img src={product.image}/>
                </Link>
            </div>
            <div className="title">
                <h2>{product.title}</h2>
            </div>
            <div className='description'>
                <span>${product.price}</span>
                <div className="hover"><FaShoppingCart onClick={() => {onAdd(product)}} style={{cursor: 'pointer'}}/></div>
            </div>
            <h5 style={{marginTop: '5px'}}>{product.category}</h5>
        </div>
    );
};

export default PopularProductCard;