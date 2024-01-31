import React from 'react'
import { FaEarthAmericas } from "react-icons/fa6";
import { rentalCarTypes } from '../Data/Data';
const Navbar = () => {
    const User = false;
    return (
        <nav>
            <div className="left">
                <div className="image">
                    <img src='../e.png' alt="logo" />
                </div>
                <h1>Carbo</h1>
            </div>
            <div className="center">
                <select name='Company' defaultValue="company" id='select'>
                    <option value="company" disabled>Company</option>
                    {rentalCarTypes.map(item => <option key={item.id}>{item.name}</option>)}
                </select>
                <span>Safety</span>
                <span>Services</span>
            </div>
            <div className="right">

                <div className="auth_btns">
                    {User ? <>
                        <div className='user'><img src="http://localhost:5173/e.png" alt="" /><span>Rajan Prajapati</span></div>
                        <button>Logout</button> </>
                        : <>
                            <button>Login</button>
                            <button>Signup</button>
                        </>}
                </div>
                <div className="language_box">
                    <FaEarthAmericas />
                    <select defaultValue={"lang"} id='select'>
                        <option value="IND">IND</option>
                        <option value="ENG">Eng</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
