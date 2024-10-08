
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Heading = () => {

    let [btnName , setBtnName] = useState('Login')
    return (
        <>

            <div className='header'>
                <div className='logo-container'>
                    <img className='logo' src= {LOGO_URL}></img>
                </div>
                <div className='nav-items'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Food</li>
                        <li>Offers</li>
                        <li>Contact</li>
                        <button className="login" onClick={()=>{
                            btnName==='Login' ? setBtnName("Logout") : setBtnName("Login")
                            console.log('logout')
                        }}>{btnName}</button>
                    </ul>
                </div>
            </div>


        </>
    );
};

export default Heading;