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

export default function Home({products, onAdd}) {


  return (
    <div>
        <ShopDesc/>
        <SearchProducts onAdd={onAdd} products={products}/>
        <ProductList onAdd={onAdd} products={products}/>
    </div>
  )
}
