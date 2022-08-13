import React from 'react'
import {fetchDataById} from "../fetch/fetchData";
import { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";
import { Button } from 'react-bootstrap';



export default function ItemDescription({onAdd, onDelete}) {

    const [itemDescription, setItemDescription] = useState({})

    const {id} = useParams()

    const [obj, setObj] = useState({})

    useEffect(() => {
        const fetch = async () => {
            console.log("EFFECT START")
            const res = await fetchDataById(id);
            console.log("EFFECT")

            console.log(res)
            setItemDescription(res)
            console.log(res.rating)
            setObj(res.rating)
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
        <div>Item rate: {obj.rate}</div>   
        <div>Items left: {obj.count}</div>   
        <div><strong>Price: {itemDescription.price}$</strong></div>   
      </div>
        <div className='div-center-button'>
            <Button onClick={() => {
                onDelete(itemDescription)
            }} className='button-center red'>
                <Link to={'/'}>Delete</Link>
            </Button>
        </div>
          <div className='div-center-button'>
              <Button onClick={() => onAdd(itemDescription)} className='button-center'>
                Add To cart
              </Button>
          </div>
    </div>
  )
}
