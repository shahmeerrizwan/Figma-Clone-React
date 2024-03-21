// import React, { useState } from 'react';
// import logo from '../../Assets/Logo.png';
// import './Navbar.css';

// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);


//     const handleMenuItemClick = () => {
//         setMenuOpen(false);
//     };

//     return (
//         <div>

//             <nav>
//                 <input type="checkbox" id="click" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
//                 <label htmlFor="click" className="menu-btn">
//                     <i className="fas fa-bars"></i>
//                     <div><a href='/'>< img className='logoo' src={logo} alt="" /></a></div>
//                 </label>
//                 <ul>
//                     <li ><a onClick={handleMenuItemClick} href='/'>Home</a></li>
//                     <li ><a onClick={handleMenuItemClick} href='/'>Service</a></li>
//                     <li ><a onClick={handleMenuItemClick} href='/'>Feature</a></li>
//                     <li ><a onClick={handleMenuItemClick} href='/'>Product</a></li>
//                     <li ><a onClick={handleMenuItemClick} href='/'>Testimonial</a></li>
//                     <li ><a onClick={handleMenuItemClick} href='/'>FAQ</a></li>
//                     <li > <a onClick={handleMenuItemClick} href='/'><button className='btn btn-login show'>Login</button></a></li>
//                     <li ><a onClick={handleMenuItemClick} href='/'>  <button className='btn btn-signup show'>SignUp</button></a></li>

//                 </ul>
//                 <div className='btn-main hide'> <button className='btn btn-login hide'>Login</button>
//                     <button className='btn btn-signup hide'>SignUp</button></div>


//             </nav>
//         </div>
//     );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import logo from '../../Assets/Logo.png';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !event.target.closest('nav')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div>
            <nav >
                <input type="checkbox" id="click" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                    <div><a href='/'><img className='logoo' src={logo} alt="" /></a></div>
                </label>
                <ul>
                    <li ><a onClick={handleMenuItemClick} href='/'>Home</a></li>
                    <li ><a onClick={handleMenuItemClick} href='/'>Service</a></li>
                    <li ><a onClick={handleMenuItemClick} href='/'>Feature</a></li>
                    <li ><a onClick={handleMenuItemClick} href='/'>Product</a></li>
                    <li ><a onClick={handleMenuItemClick} href='/'>Testimonial</a></li>
                    <li ><a onClick={handleMenuItemClick} href='/'>FAQ</a></li>
                    <li > <a onClick={handleMenuItemClick} href='/'><button className='btn btn-login show'>Login</button></a></li>
                    <li ><a onClick={handleMenuItemClick} href='/'>  <button className='btn btn-signup show'>SignUp</button></a></li>
                </ul>
                <div className='btn-main hide'> <button className='btn btn-login hide'>Login</button>
                    <button className='btn btn-signup hide'>SignUp</button></div>
            </nav>

        </div>
    );
};

export default Navbar;
