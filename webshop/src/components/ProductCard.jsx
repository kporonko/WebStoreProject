import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import {FaShoppingCart} from "react-icons/fa";


export default function ProductCard({ isAdmin, product, onAdd}) {
  return (
    // <Link to={`/item/${product.id}`}>

    // </Link>
    <div className="product-div">
        <div className='img-div'><Link to={isAdmin ? `/admin/item/${product.productId}` : `/item/${product.productId}`}><img src={product.image}/></Link></div>
        <div className="title">
            <h2>{product.title}</h2>
        </div>
        <div className='description'>
            <span>${product.price}</span>
            <div className="hover"><FaShoppingCart onClick={() => {onAdd(product)}} style={{cursor: 'pointer'}}/></div>
        </div>
        <h5 style={{marginTop: '5px'}}>{product.category}</h5>
    </div>
  )
}
