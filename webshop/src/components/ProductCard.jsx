import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';


export default function ProductCard({product, onAdd}) {
    const idd = product.id;
  return (
    // <Link to={`/item/${product.id}`}>
        
    // </Link>
    <div className='item'>
        <Link to={`/item/${product.id}`}><img src={product.image}/></Link>
        <div className='desc'>
            <div className='title'>
                <h2>{product.title}</h2>
            </div>
            <div className='to-flex'>
                <b>{product.price}$</b>
                <div
                    className='add-to-cart'
                    onClick={() => onAdd(product)}>
                    +
                </div>
            </div>
        </div>
    </div> 
  )
}
