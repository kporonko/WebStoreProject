import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

export default function Bucket({bucketProducts, onDelete}) {
  const price = bucketProducts.reduce((acc, product) => acc + product.price, 0).toFixed(2)
  return (
    <div>
      <h1 className='center'>Bucket</h1>
      <h1  className='center' style={{'font-size': '20px', 'margin': '20px 0'}}>Overall Price: {price}$</h1>
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}><Link to={'/payment'}><button disabled={!(bucketProducts.length > 0)} className={bucketProducts.length > 0 ? "black-background" : "gray-background"}>Make An Order</button></Link></div>
      {bucketProducts.length > 0 ? bucketProducts.map(product => (
      <div className='cart-item'>
        <img src={product.image}/>
        <div className='cart-desc'>
            <h2>{product.title}</h2>
            <h4>{product.description}</h4>
            <b>{product.price}$</b>
            <Button onClick={() => onDelete(product.productId)} className='button-delete' variant='danger'>Delete</Button>
        </div>
      </div>
      ))
          : <div>Cart is empty</div>}
    </div>
  )
}
