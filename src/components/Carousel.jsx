import arrowLeft from '../assets/arrowLeft.svg';
import arrowRight from '../assets/arrowRight.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../apiUrl';

function Carousel() {
    const [categories, setCategories] = useState([]);
    let [count, setCount] = useState(0);
    useEffect(() => { axios(apiUrl + 'categories').then(response => setCategories(response.data.response)).catch(error => console.log(error)) });
    const next = () => { setCount((count !== categories.length - 1) ? count += 1 : count = 0) };
    const prev = () => { setCount((count !== 0) ? count -= 1 : count = categories.length - 1) };
    return (
        <>
            <div className='hidden lg:inline-block w-[90%] h-[265px] xl:h-[350px] ml-[5%] mr-[5%] mt-[10%] mb-[10%]'>
                <div className="w-full h-full flex justify-between rounded-lg" style={{ background: categories[count]?.hover }}>
                    <button className='w-[50px]'><img src={arrowLeft} alt="Left" onClick={prev} /></button>
                    <div className='w-full'>
                        <div className='flex justify-around h-full'>
                            <div>
                                <img className='relative w-[250px] -top-[50px] xl:-top-[100px] xl:w-[300px]' src={categories[count]?.character_photo} alt="Character" />
                            </div>
                            <div>
                                <img className='relative w-[180px] -top-[50px] xl:-top-[125px] xl:w-[240px]' src={categories[count]?.cover_photo} alt="Chapter" />
                            </div>
                            <div className='w-[40%] text-white flex flex-col text-justify justify-center'>
                                <h1 className='font-roboto font-medium text-[24px] leading-[22.84px] xl:text-[40px] xl:leading-[30px] mb-[25px] xl:mb-[50px]' style={{ color: categories[count]?.color }}> {categories[count]?.name.toUpperCase()} </h1>
                                <h3 className='font-roboto font-normal text-[14px] leading-[16px] xl:text-[20px] xl:leading-[40px]' style={{ color: categories[count]?.color }}> {categories[count]?.description} </h3>
                            </div>
                        </div>
                    </div>
                    <button className='w-[50px]'><img src={arrowRight} alt="Left" onClick={next} /></button>
                </div>
            </div>
        </>
    )
}

export default Carousel;