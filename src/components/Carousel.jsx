import character from './assets/character.svg';
import chapter from './assets/chapter.svg';
import arrowLeft from './assets/arrowLeft.svg';
import arrowRight from './assets/arrowRight.svg';

function Carousel() {
    return (
        <>
            <div className='hidden lg:inline-block h-[265px] xl:h-[350px] ml-[5%] mr-[5%] mt-[10%] mb-[10%]'>
                <div className='bg-gradient-to-t from-[#F97316] to-[#FF5722] w-full h-full flex'>
                    <button className='w-[50px]'><img src={arrowLeft} alt="Left" /></button>
                    <div>
                        <div className='flex justify-around h-full'>
                            <div>
                                <img className='relative w-[250px] -top-[50px] xl:-top-[100px] xl:w-[300px]' src={character} alt="Character" />
                            </div>
                            <div>
                                <img className='relative w-[180px] -top-[50px] xl:-top-[125px] xl:w-[240px]' src={chapter} alt="Chapter" />
                            </div>
                            <div className='w-[40%] text-white flex flex-col text-justify justify-center'>
                                <h1 className='font-roboto font-medium text-[24px] leading-[22.84px] xl:text-[40px] xl:leading-[30px] mb-[25px] xl:mb-[50px]'> Shonen </h1>
                                <h3 className='font-roboto font-normal text-[14px] leading-[16px] xl:text-[20px] xl:leading-[40px]'>
                                    Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous
                                    situations often occur. The camaraderie between members of a collective or a combat team stands out.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <button className='w-[50px]'><img src={arrowRight} alt="Left" /></button>
                </div>
            </div>
        </>
    )
}

export default Carousel;