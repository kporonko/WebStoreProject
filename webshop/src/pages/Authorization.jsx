import React from 'react';
import './Authorization.css'
import {useNavigate} from "react-router-dom";
const Authorization = () => {



    let nav = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();

        if (!e.target.email.value) {
            alert("Email is required");
        } else if (!e.target.email.value) {
            alert("Valid email is required");
        } else if (!e.target.password.value) {
            alert("Password is required");
        } else if (
            e.target.email.value === "admin@gmail.com" &&
            e.target.password.value === "12345678"
        ){
            nav('/admin')
        }
        else {
            alert("Wrong email or password combination");
        }
    };


    return (
        <div className='wrapper-auth'>
            <div className="auth-main">
                <div className='img-wrapper'>
                    <p>MultiStore</p>
                    <img src="https://www.homestratosphere.com/wp-content/uploads/2019/01/Home-decor-features-in-the-house-jan22.jpg" className="logo" alt="Business view - Reports" />
                </div>
                <form className="form-auth" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="nome@email.com.br" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <button className="primary">ENTER</button>
                </form>
            </div>
        </div>
    );
};

export default Authorization;