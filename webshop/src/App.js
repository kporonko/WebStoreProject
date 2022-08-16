import React from 'react'
import { useEffect } from 'react';
import './App.css';
import {deleteProduct, fetchData} from './fetch/fetchData';
import { useState } from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Bucket from './pages/Bucket';
import Footer from './components/Footer';
import ItemDescription from './components/ItemDescription';
import Authorization from "./pages/Authorization";
import AdminPage from "./pages/AdminPage";

function App() {

    const [categories, setCategories] = useState([
        {
            key: 'all',
            name: 'All',
        },
        {
            key: 'women\'s clothing',
            name: 'Women\'s clothing',
        },
        {
            key: 'men\'s clothing',
            name: 'Men\'s clothing',
        },
        {
            key: 'electronics',
            name: 'Electronics',
        },
        {
            key: 'jewelery',
            name: 'Jewelery',
        },
    ])


    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

  useEffect(() => {
      const fetchProductsData = async () => {
          const res = await fetchData();
          setProducts(res);
      }
      fetchProductsData();
  }, [])


  const deleteOrder = async (id) => {
      setCart(cart.filter(order => order.productId !== id));
  }

  const addToCart = (product) => {
      console.log(product);
    if (cart.find(item => item.productId === product.productId)) {
      return;
    }
    setCart([...cart, product]);
  }

  const deleteItem = async (id) => {
      console.log("BEFORE")
      console.log(id)
      console.log(products)
      console.log(cart)
      setCart(cart.filter(order => order.productId !== id));
      setProducts(products.filter(product => id !== product.productId))
      await deleteProduct(id);
      console.log("AFTER")
      console.log(id)
      console.log(products)
      console.log(cart)

  }

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home products={products} categories={categories} onAdd={addToCart}/>} />
        <Route path="/bucket" element={<Bucket bucketProducts={cart} onDelete={deleteOrder}/>} />
        <Route path="/about" element={<div><img src='https://www.impactbnd.com/hubfs/blog-image-uploads/best-about-us-pages.jpg'/></div>} />
        <Route path="/contacts" element={<div><img src='https://sitechecker.pro/wp-content/uploads/2017/12/contact-us.png'/></div>} />
        <Route path="/item/:id" element={<ItemDescription isAdmin={false} onAdd={addToCart} onDelete={()=>{}} />} />
        <Route path="/admin/item/:id" element={<ItemDescription isAdmin={true} onAdd={()=>{}} onDelete={deleteItem} />} />
        <Route path="/authorization" element={<Authorization />}/>
        <Route path="/admin" element={<AdminPage categories={categories}/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
