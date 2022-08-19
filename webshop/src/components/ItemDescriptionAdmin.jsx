import React, {useState} from 'react';
import {useEffect} from "react";
import {fetchData, fetchDataById, insertProduct, modifyProduct} from "../fetch/fetchData";
import {useParams} from "react-router-dom";
import DeleteProductButton from "./DeleteProductButton";

const ItemDescriptionAdmin = ({ itemDescription, onDelete}) => {

    const [formInfo, setFormInfo] = useState({
        title: "",
        category: "",
        price: 0,
        image: "",
        desc: "",
    })

    const {id} = useParams()

    useEffect(() => {
        const fetch = async () => {
            const res = await fetchDataById(id);
            setFormInfo(res)
        }
        fetch();

    }, [id])


    const submit = async (e) => {
        e.preventDefault();
        await modifyProduct(parseInt(id), formInfo.title, formInfo.description, formInfo.category, formInfo.price, formInfo.image);
        window.location.reload()
    }

    return (
        <div className='full-desc'>
            <form onSubmit={submit}>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <img style={{width:'300px', height: '400px'}} src={formInfo.image} alt=""/>
                </div>
                <input style={{margin: '10px 0'}} onChange={(e)=>{setFormInfo({...formInfo, title: e.target.value})}} type="text" value={formInfo.title}/>
                <textarea style={{margin: '10px 0'}} onChange={(e)=>{setFormInfo({...formInfo, desc: e.target.value})}} value={formInfo.description} name="" id="" cols="30" rows="10"></textarea>
                <select style={{margin: '10px 0'}} onChange={(e)=>{setFormInfo({...formInfo, category: e.target.value})}} value={formInfo.category}>
                    <option value="electronics">electronics</option>
                    <option value="men's clothing">men's clothing</option>
                    <option value="women's clothing">women's clothing</option>
                    <option value="jewelery">jewelery</option>
                </select>
                <input style={{margin: '10px 0'}} onChange={(e)=>{setFormInfo({...formInfo, image: e.target.value})}} type="text" value={formInfo.image}/>
                <input style={{margin: '10px 0'}} value={formInfo.price} type="text" onChange={(e)=>{setFormInfo({...formInfo, price: e.target.value})}}/>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button style={{background: "black"}} type='submit'>Change</button>
                </div>
            </form>
            <DeleteProductButton itemDescription={itemDescription} onDelete={onDelete}/>
        </div>
    );
};

export default ItemDescriptionAdmin;