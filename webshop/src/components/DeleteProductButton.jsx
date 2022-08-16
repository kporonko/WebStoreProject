import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const DeleteProductButton = ({onDelete, itemDescription}) => {
    return (
        <div className='div-center-button'>
            <Button onClick={() => {
                onDelete(itemDescription.productId)
            }} className='button-center red'>
                <Link to={'/'}>Delete</Link>
            </Button>
        </div>
    );
};

export default DeleteProductButton;