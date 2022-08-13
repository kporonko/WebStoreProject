import React from 'react'
import Button from 'react-bootstrap/Button';

export default function Bucket({bucketProducts, onDelete}) {
  const price = bucketProducts.reduce((acc, product) => acc + product.price, 0).toFixed(2)
  return (
    <div>
      <h1 className='center'>Bucket</h1>
      <h1  className='center' style={{'font-size': '20px', 'margin': '20px 0'}}>Overall Price: {price}$</h1>
      {bucketProducts.length > 0 ? bucketProducts.map(product => (
      <div className='cart-item'>
        <img src={product.image}/>
        <div className='cart-desc'>
            <h2>{product.title}</h2>
            <h4>{product.description}</h4>
            <b>{product.price}$</b>
            <Button onClick={() => onDelete(product.id)} className='button-delete' variant='danger'>Delete</Button>
        </div>
      </div>
    )) : <div>Cart is empty</div>}
    </div>
  )
}
