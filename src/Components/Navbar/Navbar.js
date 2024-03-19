import React, { useState } from 'react';
import logo from '../../Assets/Logo.png';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    return (
        <div>

            <nav>
                <input type="checkbox" id="click" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                    <div>< img className='logoo' src={logo} alt="" /></div>
                </label>
                <ul>
                    <li ><a onClick={handleMenuItemClick} href='/'>Home</a></li>
                    <li ><a onClick={handleMenuItemClick} href='/'>Service</a></li>
                    <li ><a onClick={handleMenuItemClick} href='/'>Feature</a></li>
                    <li ><a onClick={handleMenuItemClick} href='/'>Product</a></li>
                    <li ><a onClick={handleMenuItemClick} href='/'>Testimonial</a></li>
                    <li ><a onClick={handleMenuItemClick} href='/'>FAQ</a></li>
                </ul>  <div className='btn-main'> <button className='btn btn-login'>Login</button>
                    <button className='btn btn-signup'>SignUp</button></div>


            </nav>
        </div>
    );
};

export default Navbar;