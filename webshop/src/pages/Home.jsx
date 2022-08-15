import React from 'react'
import Header from '../components/Header'
import { useEffect } from 'react';
import '../App.css';
import { fetchData } from '../fetch/fetchData';
import { useState } from 'react';
import ProductList from '../components/ProductList';
import SearchProducts from "../components/SearchProducts";
import Categories from "../components/Categories";

export default function Home({products, onAdd}) {


  return (
    <div>
        <div className='image-center'>
            <img src="https://media.istockphoto.com/vectors/black-background-55-vector-id1202855261?k=20&m=1202855261&s=612x612&w=0&h=raXWH0ZUDlfSGch3iq00HggSgMGDsq25XuHB0bZs2Ac=" alt="" />
            <p>Shop Description</p>
        </div>
        <SearchProducts onAdd={onAdd} products={products}/>
        <ProductList onAdd={onAdd} products={products}/>
    </div>
  )
}
