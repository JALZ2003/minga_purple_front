import { useState } from 'react';
import logoWeb from '../assets/logoWeb.svg';
import logoMobile from '../assets/LogoMobile.svg';
import menu from '../assets/Menu.svg';
import Sidebar from './Sidebar';

function Navbar() {
    const options = [{ title: "Home" }, { title: "Comics" }, { title: "My Comics" }, { title: "Favorites" }, { title: "Logout" }];
    const [show, setShow] = useState(false);
    return (
        <>
            <nav className='flex justify-between w-full absolute'>
                <button className='w-[55px] h-[55px] ml-5 mt-5 lg:ml-[5%]' onClick={() => setShow(!show)}>
                    <img src={menu} alt="Menu" />
                </button>
                <img className='w-[40px] h-[48px] inline-block lg:hidden mr-5 mt-5 lg:mr-[5%]' src={logoMobile} alt="Minga" />
                <img className='w-[140px] h-[50px] hidden lg:inline-block mr-5 mt-5 lg:mr-[5%]' src={logoWeb} alt="Minga" />
            </nav>
            { show && <Sidebar options={options} show={show} setShow={setShow} />}
        </>
    )
}

export default Navbar;