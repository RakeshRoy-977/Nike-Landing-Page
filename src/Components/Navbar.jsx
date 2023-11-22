import React from 'react'

const Navbar = () => {
    const dd="clicked";
  return (
    <header>
        <div className="nav">
            <div className="logo">
                <img src="./assets/logo.png" alt="logo" />
            </div>

            <ul className='menu'>
                <li className='nav_menu' href="#">Home</li>
                <li className='nav_menu' href="#">Location</li>
                <li className='nav_menu' href="#">About</li>
                <li className='nav_menu' href="#">Contact</li>
            </ul>

            <button className="btn_login">Login</button>

        </div>
    </header>
    )
}

export default Navbar