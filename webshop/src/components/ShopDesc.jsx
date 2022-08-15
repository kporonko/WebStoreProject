import React from 'react';
import {Button} from "@mui/material";

const ShopDesc = () => {

    const scroll = () => {
        window.scrollTo({top: 700, behavior:'smooth'});
    }
    return (
        <div className='image-center'>
            <img style={{height:'600px'}} src="https://www.homestratosphere.com/wp-content/uploads/2019/01/Home-decor-features-in-the-house-jan22.jpg" alt="" />
            <p>MultiStore</p>
            <b>We Have Everything You Need</b>
            <span className='absolute-span'><a onClick={scroll}></a></span>
        </div>
    );
};

export default ShopDesc;