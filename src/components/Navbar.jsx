// import userImage from '../assets/estefaUser.png';
// import clouse from '../assets/clouse.svg';
import logoWeb from '../assets/logoWeb.svg';
import logoMobile from '../assets/LogoMobile.svg';
import menu from '../assets/Menu.svg';

function Navbar() {
    return (
        <>
            <nav className='flex justify-between w-full absolute'>
                <button className='w-[55px] h-[55px] ml-5 mt-5 lg:ml-[5%]'>
                    <img src={menu} alt="Menu" />
                </button>
                <img className='w-[40px] h-[48px] inline-block lg:hidden mr-5 mt-5 lg:mr-[5%]' src={logoMobile} alt="Minga" />
                <img className='w-[140px] h-[50px] hidden lg:inline-block mr-5 mt-5 lg:mr-[5%]' src={logoWeb} alt="Minga" />
            </nav>

            {/* <nav id='nav' className='invisible fixed text-white list-none flex flex-col items-center bg-gradient-to-t from-[#F97316] to-[#FF5722] h-screen w-full lg:w-[430px]'>
                <li className='flex justify-between w-full'>
                    <div className='flex m-5'>
                        <img className='m-2 rounded-[50px] w-[46px] h-[46px]' src={userImage} alt="" />
                        <div className='m-2'>
                            <h1 className='font-poppins font-semibold text-[16px] leading-[24px] -tracking-[.01em]'> Estefania Marin </h1>
                            <p className='font-poppins font-medium text-[14px leading-[12px] -tracking-[.01em]'> estefaniamarin@gmail.com </p>
                        </div>
                    </div>
                    <button className='m-5'><img src={clouse} alt="" /></button>
                </li>
                <li className='cursor-pointer w-[382px] h-[48px] rounded-lg p-3 gap-3 text-center hover:bg-white hover:text-[#FF5722]'>
                    <a href="#" className='font-poppins font-semibold text-[15px] leading-[24px] -tracking-[.01em]'> Home </a>
                </li>
                <li className='cursor-pointer w-[382px] h-[48px] rounded-lg p-3 gap-3 text-center hover:bg-white hover:text-[#FF5722]'>
                    <a href="#" className='font-poppins font-semibold text-[15px] leading-[24px] -tracking-[.01em]'> Comics </a>
                </li>
                <li className='cursor-pointer w-[382px] h-[48px] rounded-lg p-3 gap-3 text-center hover:bg-white hover:text-[#FF5722]'>
                    <a href="#" className='font-poppins font-semibold text-[15px] leading-[24px] -tracking-[.01em]'> My Comics </a>
                </li>
                <li className='cursor-pointer w-[382px] h-[48px] rounded-lg p-3 gap-3 text-center hover:bg-white hover:text-[#FF5722]'>
                    <a href="#" className='font-poppins font-semibold text-[15px] leading-[24px] -tracking-[.01em]'> Favorites </a>
                </li>
                <li className='cursor-pointer w-[382px] h-[48px] rounded-lg p-3 gap-3 text-center hover:bg-white hover:text-[#FF5722]'>
                    <a href="#" className='font-poppins font-semibold text-[15px] leading-[24px] -tracking-[.01em]'> Logout </a>
                </li>
            </nav> */}
        </>
    )
}

export default Navbar;