import React from 'react'
import Button from './Button'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="nav-top">
                <img src="./images/brand-logo.svg" alt="" className="src" />

                <input type="text" name="search" placeholder="Search Food..." />

            </div>
            <div className="nav-bottom">
                 <Button text='All' />
                 <Button text='Breakfast' />
                 <Button text='Lunch' />
                 <Button text='Dinner' />




            </div>
        </nav>
    )
}
export default Navbar;