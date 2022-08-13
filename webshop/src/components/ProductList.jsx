import React from 'react'
import { useEffect } from 'react';
import '../App.css';
import { fetchData } from '../fetch/fetchData';
import { useState } from 'react';
import ProductCard from './ProductCard';
import Link from 'react-router-dom';


export default function ProductList({products, onAdd}) {
console.log(products)
  return (
    <main>
        {products.length > 0 ? products.map(product => (
            <ProductCard onAdd={onAdd} key={product.productId} product={product}/>
        )) : <div>Loading...</div>}
    </main>
  )
}
