import React from 'react'
import { useEffect } from 'react';
import '../App.css';
import { fetchData } from '../fetch/fetchData';
import { useState } from 'react';
import ProductCard from './ProductCard';
import Link from 'react-router-dom';
import {Pagination, Box} from "@mui/material";
import Categories from "./Categories";


export default function ProductList({products, onAdd }) {


    let [currentProductsCategory, setCurrentProductsCategory] = useState(products)

    useEffect(() => {
        const fetchProductsData = async () => {
            const res = await fetchData();
            setCurrentProductsCategory(res);
        }
        fetchProductsData();
    }, [])


    const [currentCategory, setCurrentCategory] = useState('all');
    function chooseCategory(category){
        if(category === 'all'){
            setCurrentCategory(category)
            setCurrentProductsCategory(products);
            setCurrentPage(1);

            return;
        }
        setCurrentPage(1);

        setCurrentCategory(category)
        setCurrentProductsCategory(products.filter(item => item.category === category));
    }



    const [currentPage, setCurrentPage] = useState(1)
    const indexOfLastProduct = currentPage * 9;
    const indexOfFirstProduct = indexOfLastProduct - 9;
    const currentProducts = currentProductsCategory.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 2300, behavior: 'smooth' });
    };
  return (
      <div>
          <Categories products={currentProducts} chooseCategory={chooseCategory}/>
          <h1 style={{marginBottom: '20px'}}><span style={{marginLeft: '20px'}}>Category: {currentCategory}</span></h1>
          <main>
              {currentProducts.length > 0 ? currentProducts.map(product => (
                  <ProductCard onAdd={onAdd} key={product.productId} product={product}/>
              )) : <div>Loading...</div>}
          </main>
          <Box mt={4} style={{display: 'flex', justifyContent: 'center'}}>
              <Pagination
                  defaultPage={1}
                  count={Math.ceil(currentProductsCategory.length / 9)}
                  page={currentPage}
                  onChange={paginate}
              />
          </Box>
      </div>

  )
}
