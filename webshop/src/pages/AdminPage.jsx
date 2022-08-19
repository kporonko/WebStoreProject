import React, {useMemo, useState} from 'react';
import './AdminPage.css'
import {useEffect} from "react";
import {fetchData} from "../fetch/fetchData";
import ProductList from "../components/ProductList";
import SearchProducts from "../components/SearchProducts";
import {insertProduct} from "../fetch/fetchData"

const AdminPage = ({categories}) => {

    let [products, setProducts] = useState([])

    const [formInfo, setFormInfo] = useState({
        title: "",
        category: "",
        price: 0,
        count: 0,
        rate: 0,
        image: "",
        desc: "",
    })

    const handleSubmit = async (e) => {
        let isCategory = false;
        e.preventDefault();
        categories.forEach((item) => {
            if (item.key === formInfo.category){
                isCategory = true;
            }
        })
        if (!isCategory){
            return;
        }
        else{
            await insertProduct(formInfo.title, formInfo.desc, formInfo.category, formInfo.price, formInfo.image,formInfo.rate, formInfo.count);
            window.location.reload()
        }
    }

    useEffect(() => {
        const fetchProductsData = async () => {
            const res = await fetchData();
            setProducts(res);
        }
        fetchProductsData();
    }, [])

    return (
        <div>
            <div className="form">
                {formInfo.image && <div className='img-wrapper'>
                    <img src={formInfo.image} alt=""/>
                </div>}
                <form className='form-admin' onSubmit={handleSubmit} action="">
                    <p>
                        <label htmlFor="">Title</label>
                        <input onChange={(e) => setFormInfo({...formInfo, title: e.target.value})} type="text" value={formInfo.title}/>
                    </p>
                    <p>
                        <label htmlFor="">Category</label>
                        <select name="" id="" onChange={(e) => setFormInfo({...formInfo, category: e.target.value})}>
                            <option value="electronics">electronics</option>
                            <option value="men's clothing">men's clothing</option>
                            <option value="women's clothing">women's clothing</option>
                            <option value="jewelery">jewelery</option>
                        </select>
                        {/*<input onChange={(e) => setFormInfo({...formInfo, category: e.target.value})} type="text" value={formInfo.category}/>*/}
                    </p>
                    <p>
                        <label htmlFor="">Price</label>
                        <input onChange={(e) =>{

                            if ( !isNaN(+e.target.value)){
                                setFormInfo({...formInfo, price: +e.target.value})
                            }
                        }} type="text" value={formInfo.price}/>
                    </p>
                    <p>
                        <label htmlFor="">Image</label>
                        <input onChange={(e) =>{ setFormInfo({...formInfo, image: e.target.value})
                        }} type="text" value={formInfo.image}/>
                    </p>
                    <p>
                        <label htmlFor="">Rate</label>
                        <input onChange={(e) =>{
                            if ( !isNaN(+e.target.value)){
                                setFormInfo({...formInfo, rate: +e.target.value})
                            }
                        }} type="text" value={formInfo.rate}/>                    </p>
                    <p>
                        <label htmlFor="">Count</label>
                        <input onChange={(e) =>{
                            if ( !isNaN(+e.target.value)){
                                setFormInfo({...formInfo, count: +e.target.value})
                            }
                        }} type="text" value={formInfo.count}/>                    </p>
                    <p className="full-width">
                        <label htmlFor="">Description</label>
                        <textarea onChange={(e) => setFormInfo({...formInfo, desc: e.target.value})} value={formInfo.desc} name="" id="" cols="30" rows="7"></textarea>
                    </p>
                    <p className="full-width buttonwrapper">
                        <button style={{cursor: 'default'}} disabled={!(formInfo.count > 0 && formInfo.rate > 0 && formInfo.image && formInfo.price && formInfo.desc && formInfo.title && formInfo.category)} className = {(formInfo.count > 0 && formInfo.rate > 0 && formInfo.image && formInfo.price && formInfo.desc && formInfo.title && formInfo.category) ? ' black' : ''} type='submit'>Send</button>
                    </p>
                </form>
            </div>
            <div>
                <SearchProducts isAdmin={true} products={products} onAdd={()=>{}}/>
                <ProductList isAdmin={true} categories={categories} products={products} onAdd={()=>{}}/>
            </div>
        </div>

    );
};

export default AdminPage;