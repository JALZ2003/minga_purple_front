import { useState } from 'react';
import logoWeb from './assets/logoWeb.svg';
import logoMobile from './assets/LogoMobile.svg';
import logoFooter from './assets/LogoFooter.svg';
import menu from './assets/Menu.svg';
import userImage from './assets/estefaUser.png';
import clouse from './assets/clouse.svg';
import facebook from './assets/Facebook.svg';
import twitter from './assets/Twitter.svg';
import vimeo from './assets/Vimeo.svg';
import youtube from './assets/Youtube.svg';
import donate from './assets/donate.svg';
import footerImage from './assets/footerImage.png';
import character from './assets/character.svg';
import chapter from './assets/chapter.svg';
import arrowLeft from './assets/arrowLeft.svg';
import arrowRight from './assets/arrowRight.svg';

function App() {

	const clouseNav = () => { document.getElementById('nav').classList.toggle('invisible') };

	return (
		<>
			<div className='absolute flex flex-col justify-between w-full'>
				<div className='w-[100%] h-screen lg:h-[646px] bg-[url("./assets/backgroundHome.png")] bg-no-repeat bg-cover'>
					<div className='flex flex-col h-screen lg:h-[646px] m-5 lg:ml-[5%] lg:mr-[5%]'>
						<div className='flex justify-between w-full'>
							<button className='w-[55px] h-[55px]' onClick={clouseNav}>
								<img src={menu} alt="Menu" />
							</button>
							<img className='w-[40px] h-[48px] inline-block lg:hidden' src={logoMobile} alt="Minga" />
							<img className='w-[193px] h-[42px] hidden lg:inline-block' src={logoWeb} alt="Minga" />
						</div>
						<div className='text-center text-white h-full flex flex-col items-center justify-center gap-[30px] lg:items-start'>
							<h1 className='
						// mobile
						font-poppins font-bold text-[40px] leading-[38.07px]
						// web
						lg:font-bold lg:text-[64px] lg:leading-[60.92px]
						'> For the love of manga </h1>
							<p className='
						// mobile
						font-poppins font-normal text-[20px] leading-[19.04px]
						// web
						lg:text-[24px] lg:leading-[22.84px]'> Explore our varieties </p>
							<p className='font-poppins font-semibold text-[16px] leading-[15.23px] hidden lg:flex'> #MingaLove <span className='font-sans'>❤</span> </p>
							<button className='
						// mobile
						cursor-pointer font-roboto font-medium text-[20px] leading-[19.04px] text-center w-[363px] h-[59px] rounded-md pr-[55px] pl-[55px] pt-[20px] pb-[20px] gap-[10px] bg-white text-[#FF5722]
						// web
						lg:w-[240px] lg:h-[55px] lg:p-[16px] lg:gap-[10px]'> Let's go! </button>
						</div>
					</div>
				</div>
				<main className='m-[5%] mt-[15%] mb-[15%] lg:mt-[5%] lg:mb-[5%] flex justify-between items-center'>
					<button className='w-[120px] md:w-[100px] lg:w-[80px]'><img src={arrowLeft} alt="Left" /></button>
					<div className='h-full lg:h-[265px] bg-gradient-to-t from-[#F97316] to-[#FF5722] grid grid-cols-1 lg:grid-cols-3 place-items-center'>
						<img className='order-1 lg:order-[0] relative w-[150px] lg:w-[263px] lg:h-[291px] lg:-top-[35px]' src={character} alt="Character" />
						<img className='relative w-[150px] -top-[40px] lg:w-[179px] lg:h-[284px] lg:rounded-md lg:-top-[60px]' src={chapter} alt="Chapter" />
						<div className='order-1 lg:order-[0] text-white m-[30px]'>
							<h1 className='font-roboto font-medium text-[24px] leading-[22.84px] mb-2'> Shonen </h1>
							<p className='font-roboto font-normal text-[14px] leading-[13.33px]'>
								Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous
								situations often occur. The camaraderie between members of a collective or a combat team stands out.
							</p>
						</div>
					</div>
					<button className='w-[120px] md:w-[100px] lg:w-[80px]'><img src={arrowRight} alt="Right" /></button>
				</main>
				<footer className='w-full'>
					<img className='w-full h-[150px] lg:h-[336px]' src={footerImage} alt="" />
					<div className='
				// mobile
				grid grid-cols-1 gap-[30px] place-items-center bg-white text-black
				// web
				lg:grid-cols-3 lg:gap-[0px]'>
						<div className='
					// mobile
					flex justify-around w-full
					// web
					lg:w-[50%]'>
							<a className='font-poppins font-normal text-[16px] leading-[24px]' href='#'> Home </a>
							<a className='font-poppins font-normal text-[16px] leading-[24px]' href='#'> Mangas </a>
						</div>
						<a href="#"><img className='w-[169px] h-[54px]' src={logoFooter} alt="" /></a>
						<div className='flex flex-col h-[150px] justify-around items-center'>
							<div className='flex justify-around w-full'>
								<a href="https://www.facebook.com"><img src={facebook} alt="Facebook" /></a>
								<a href="https://twitter.com/?lang=es"><img src={twitter} alt="Twitter" /></a>
								<a href="https://vimeo.com/es/"><img src={vimeo} alt="Vimeo" /></a>
								<a href="https://www.youtube.com"><img src={youtube} alt="Youtube" /></a>
							</div>
							<button className='flex w-[221px] h-[43px] rounded-[4px] pl-[34px] pr-[24px] pt-[15px] pb-[15px] bg-gradient-to-t from-[#F97316] to-[#FF5722] text-white justify-around'>
								<p className='font-poppins font-normal text-[16px] leading-[15.23px]'> Donate </p>
								<img src={donate} alt="Heart" />
							</button>
						</div>
					</div>
				</footer>
			</div>
			<nav id='nav' className='invisible fixed text-white list-none flex flex-col items-center bg-gradient-to-t from-[#F97316] to-[#FF5722] h-screen w-full lg:w-[430px]'>
				<li className='flex justify-between w-full'>
					<div className='flex m-5'>
						<img className='m-2 rounded-[50px] w-[46px] h-[46px]' src={userImage} alt="" />
						<div className='m-2'>
							<h1 className='font-poppins font-semibold text-[16px] leading-[24px] -tracking-[.01em]'> Estefania Marin </h1>
							<p className='font-poppins font-medium text-[14px leading-[12px] -tracking-[.01em]'> estefaniamarin@gmail.com </p>
						</div>
					</div>
					<button className='m-5' onClick={clouseNav}><img src={clouse} alt="" /></button>
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
			</nav>
		</>
	)
}

export default App