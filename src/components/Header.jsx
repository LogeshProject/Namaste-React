
import { LOGO_URL } from "../utils/constants";

const Heading = () => {
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
                    </ul>
                </div>
            </div>


        </>
    );
};

export default Heading;