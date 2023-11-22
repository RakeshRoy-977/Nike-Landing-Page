import React from 'react'

const Navbar = () => {
    const dd="clicked";
  return (
    <header>
        <div className="nav">
            <div className="logo">
                <img src="/assets/logo.png" alt="logo" />
            </div>

            <ul className='menu'>
                <li href="#">Home</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>

            <button className="btn_login">Login</button>

        </div>
    </header>
    )
}

export default Navbar