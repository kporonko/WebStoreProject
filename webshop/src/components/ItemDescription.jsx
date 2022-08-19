import React from 'react'
import {fetchDataById} from "../fetch/fetchData";
import { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";
import AddProductInCartButton from "./AddProductInCartButton";
import DeleteProductButton from "./DeleteProductButton";
import ItemDescriptionAdmin from "./ItemDescriptionAdmin";



export default function ItemDescription({isAdmin, onAdd, onDelete}) {

    const [itemDescription, setItemDescription] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const fetch = async () => {
            const res = await fetchDataById(id);
            setItemDescription(res)
        }
        fetch();

    }, [id])


  return (
    <div>
        {isAdmin ?
            <ItemDescriptionAdmin itemDescription={itemDescription} onDelete={onDelete}/>
            :
            <div>
                <img className='full-center' src={itemDescription.image} alt="" />
                <div className='full-desc'>
                    <h2>{itemDescription.title}</h2>
                    <span>{itemDescription.description}</span>
                    <div>Category: {itemDescription.category}</div>
                    <div>Item rate: <span className={JSON.stringify(itemDescription) !== JSON.stringify({}) ? (itemDescription.rating.rate >=0 && itemDescription.rating.rate <=59 ? 'div-price-red' :(itemDescription.rating.rate <=79) ? 'div-price-yellow' : 'div-price-green') : ''}>{JSON.stringify(itemDescription) === JSON.stringify({}) ? '' : itemDescription.rating.rate}</span></div>
                    <div>Items left: {JSON.stringify(itemDescription) === JSON.stringify({}) ? '' : itemDescription.rating.count}</div>
                    {/*<div>Item rate: <span className={rating.rate >=0 && rating.rate <=59 ? 'div-price-red' : (rating.rate <=79) ? 'div-price-yellow' : 'div-price-green'}>{rating.rate}</span></div>*/}
                    <div><strong>Price: {itemDescription.price}$</strong></div>
                </div>
                <AddProductInCartButton onAdd={onAdd} itemDescription={itemDescription}/>
            </div>
        }
    </div>
  )
}
