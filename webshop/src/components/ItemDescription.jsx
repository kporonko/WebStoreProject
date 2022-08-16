import React from 'react'
import {fetchDataById} from "../fetch/fetchData";
import { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";
import AddProductInCartButton from "./AddProductInCartButton";
import DeleteProductButton from "./DeleteProductButton";



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
      <img className='full-center' src={itemDescription.image} alt="" />
      <div className='full-desc'>
        <h2>{itemDescription.title}</h2>
        <span>{itemDescription.description}</span>
        <div>Category: {itemDescription.category}</div>
        <div>Item rate: {itemDescription.rate}</div>
        <div>Items left: {itemDescription.count}</div>
        <div><strong>Price: {itemDescription.price}$</strong></div>   
      </div>
        {isAdmin ? <DeleteProductButton onDelete={onDelete}/> :
        <AddProductInCartButton onAdd={onAdd} itemDescription={itemDescription}/>}
    </div>
  )
}
