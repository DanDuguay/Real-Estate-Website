import React from 'react'
import './Header.css'


 const Header = () => {
    return (
        <section className='h-wrapper'>
            <div className='flexCenter paddings innerWidth h-container'>
                <img src='./logo.png' alt='logo' width={120} ></img>
                <div className="flexCenter h-menu">
                    <a href="">Buy</a>
                    <a href="">Rent</a>
                    <a href="">Broker</a>
                    <a href="">About us</a>
                    <div class="dropdown">
                        <button className="dropbtn button">Login</button>
                        <div className="dropdown-content">
                            <a href="#">As User</a>
                            <a href="#">As Broker</a>
                            <a href="#">As Administrator</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Header;

