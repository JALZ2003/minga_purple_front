import facebook from './assets/Facebook.svg';
import twitter from './assets/Twitter.svg';
import vimeo from './assets/Vimeo.svg';
import youtube from './assets/Youtube.svg';
import donate from './assets/donate.svg';
import logoFooter from './assets/LogoFooter.svg';
import footerBg from './assets/FooterBg.svg';

function Footer() {
    return (
        <>
            <footer className='w-full'>
                <img className='w-full h-full' src={footerBg} alt="" />
                <div className='
				// mobile
				grid grid-cols-1 gap-[30px] place-items-center bg-white text-black
				// web
				lg:grid-cols-none lg:gap-0 lg:flex lg:justify-between lg:items-center mr-[5%] ml-[5%]'>
                    <div className='
					// mobile
					flex justify-around w-full
					// web
					lg:justify-start lg:w-[33%]'>
                        <a className='lg:mr-[200px] font-poppins font-normal text-[20px] leading-[24px]' href='#'> Home </a>
                        <a className='font-poppins font-normal text-[20px] leading-[24px]' href='#'> Mangas </a>
                    </div>
                    <div className='lg:w-[33%] flex justify-center'><img className='cursor-pointer lg:w-[250px] lg:h-[150px]' src={logoFooter} alt="" /></div>
                    <div className='flex flex-col h-[150px] justify-around items-center lg:items-end w-full lg:w-[33%]'>
                        <div className='flex justify-between w-full lg:w-[50%]'>
                            <a href="https://www.facebook.com"><img src={facebook} alt="Facebook" /></a>
                            <a href="https://twitter.com/?lang=es"><img src={twitter} alt="Twitter" /></a>
                            <a href="https://vimeo.com/es/"><img src={vimeo} alt="Vimeo" /></a>
                            <a href="https://www.youtube.com"><img src={youtube} alt="Youtube" /></a>
                        </div>
                        <button className='flex w-full lg:w-[50%] h-[50px] rounded-[4px] pl-[34px] pr-[24px] pt-[15px] pb-[15px] bg-gradient-to-t from-[#F97316] to-[#FF5722] text-white justify-center'>
                            <p className='font-poppins font-normal text-[18px] leading-[15.23px] mr-[20px]'> Donate </p>
                            <img src={donate} alt="Heart" />
                        </button>
                    </div>
                </div>
                <hr className="mb-24 mr-[5%] ml-[5%] hidden lg:block text-[#222222] border-[#2B3D51] opacity-30"></hr>
            </footer>
        </>
    )
}

export default Footer;