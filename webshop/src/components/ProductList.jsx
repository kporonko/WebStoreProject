import React from 'react'
import { useEffect } from 'react';
import '../App.css';
import { fetchData } from '../fetch/fetchData';
import { useState } from 'react';
import ProductCard from './ProductCard';
import Link from 'react-router-dom';
import {Pagination, Box} from "@mui/material";


export default function ProductList({products, onAdd}) {
    const [currentPage, setCurrentPage] = useState(1)
    const indexOfLastProduct = currentPage * 12;
    const indexOfFirstProduct = indexOfLastProduct - 12;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    console.log(products)

    const paginate = (event, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

  return (
      <div>
          <h1 style={{marginBottom: '20px'}}>All Products</h1>

          <main>
              {currentProducts.length > 0 ? currentProducts.map(product => (
                  <ProductCard onAdd={onAdd} key={product.productId} product={product}/>
              )) : <div>Loading...</div>}
          </main>
          <Box mt={4} style={{display: 'flex', justifyContent: 'center'}}>
              <Pagination
                  defaultPage={1}
                  count={Math.ceil(products.length / 12)}
                  page={currentPage}
                  onChange={paginate}
              />
          </Box>
      </div>

  )
}
