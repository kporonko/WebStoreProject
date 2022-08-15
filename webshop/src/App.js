import React from 'react'
import { useEffect } from 'react';
import './App.css';
import { fetchData } from './fetch/fetchData';
import { useState } from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Bucket from './pages/Bucket';
import Footer from './components/Footer';
import ItemDescription from './components/ItemDescription';

function App() {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

  useEffect(() => {
      const fetchProductsData = async () => {
          const res = await fetchData();
          setProducts(res);
      }
      fetchProductsData();
  }, [])


  const deleteOrder = (id) => {
    setCart(cart.filter(order => order.productId !== id));
  }

  const addToCart = (product) => {
    if (cart.find(item => item.productId === product.productId)) {
      return;
    }
    setCart([...cart, product]);
  }
  const deleteItem = (item) => {
      deleteOrder(item.productId);
      setProducts(products.filter(product => item.productId !== product.productId))
      return
  }
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home products={products} onAdd={addToCart}/>} />
        <Route path="/bucket" element={<Bucket bucketProducts={cart} onDelete={deleteOrder}/>} />
        <Route path="/about" element={<div><img src='https://www.impactbnd.com/hubfs/blog-image-uploads/best-about-us-pages.jpg'/></div>} />
        <Route path="/contacts" element={<div><img src='https://sitechecker.pro/wp-content/uploads/2017/12/contact-us.png'/></div>} />
        <Route path="/item/:id" element={<ItemDescription onAdd={addToCart} onDelete={deleteItem} />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
