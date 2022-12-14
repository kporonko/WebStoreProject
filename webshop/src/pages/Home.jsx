import React from 'react'
import Header from '../components/Header'
import { useEffect } from 'react';
import '../App.css';
import { fetchData } from '../fetch/fetchData';
import { useState } from 'react';
import ProductList from '../components/ProductList';
import SearchProducts from "../components/SearchProducts";
import Categories from "../components/Categories";
import ShopDesc from "../components/ShopDesc";
import PopularProducts from "../components/PopularProducts";

export default function Home({products, categories, onAdd}) {

  return (
    <div>
        <ShopDesc/>
        <SearchProducts onAdd={onAdd} products={products}/>
        <PopularProducts onAdd={onAdd} products={products} isAdmin={false}/>
        <ProductList categories={categories} onAdd={onAdd} products={products}/>
    </div>
  )
}
