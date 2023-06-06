
function Banner() {
    return (
        <>
            <div className='w-[100%] h-screen lg:h-[646px] bg-[url("./assets/backgroundHome.svg")] bg-no-repeat bg-cover'>
                <div className='flex flex-col h-screen lg:h-[646px] ml-5 mr-5 lg:ml-[5%] lg:mr-[5%]'>
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
        </>
    )
}

export default Banner;