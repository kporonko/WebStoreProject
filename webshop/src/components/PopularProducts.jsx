import React, {useEffect} from 'react';
import ProductCard from "./ProductCard";
import {Box, Pagination} from "@mui/material";
import {useRef, useState} from "react";
import {fetchData} from "../fetch/fetchData";
import PopularProductCard from "./PopularProductCard";

const PopularProducts = ({onAdd, products, isAdmin}) => {

    const [popularProducts, setPopularProducts] = useState([])

    useEffect( () => {
        const fetchProductsData = async () => {
            const res = await fetchData();
            setPopularProducts(res)
        }
        fetchProductsData();
    }, [])


    function IsRating(item){
        return item.rating
    }

    return (
        <div>
            <div className="popular-header">
                Most Popular Products
            </div>
            {
                popularProducts.every(IsRating) && <main>
                {popularProducts.length > 0 ? popularProducts.sort((prod1, prod2) => {
                    return prod1.rating.rate - prod2.rating.rate;
                }).reverse().slice(0,9).map(product => (
                    <PopularProductCard isAdmin={isAdmin} onAdd={onAdd} key={product.productId} product={product}/>
                )) : <div>Loading...</div>}
            </main>}
        </div>
    );
};

export default PopularProducts;