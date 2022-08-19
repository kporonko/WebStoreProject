import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";


import React from 'react';

const AddProductInCartButton = ({itemDescription, onAdd}) => {
    return (
        <div>
            <div className='div-center-button'>
                <Button onClick={() => onAdd(itemDescription)} className='button-center'>
                    Add To cart
                </Button>
            </div>
        </div>
    );
};

export default AddProductInCartButton;
