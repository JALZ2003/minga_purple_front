import userImage from '../assets/estefaUser.png';
import clouse from '../assets/clouse.svg';

function Sidebar({ options, show, setShow }) {
    return (
        <>
            <nav id='nav' className='fixed text-white list-none flex flex-col items-center bg-gradient-to-t from-[#F97316] to-[#FF5722] h-screen w-full lg:w-[430px]'>
                <li className='flex justify-between w-full'>
                    <div className='flex m-5'>
                        <img className='m-2 rounded-[50px] w-[46px] h-[46px]' src={userImage} alt="" />
                        <div className='m-2'>
                            <h1 className='font-poppins font-semibold text-[16px] leading-[24px] -tracking-[.01em]'> Estefania Marin </h1>
                            <p className='font-poppins font-medium text-[14px leading-[12px] -tracking-[.01em]'> estefaniamarin@gmail.com </p>
                        </div>
                    </div>
                    <button className='m-5' onClick={() => setShow(!show)}><img src={clouse} alt="" /></button>
                </li>
                {
                    options?.map((each, i) =>
                        <li key={i} className='cursor-pointer w-[382px] h-[48px] rounded-lg p-3 gap-3 text-center hover:bg-white hover:text-[#FF5722]'>
                            <a className='font-poppins font-semibold text-[15px] leading-[24px] -tracking-[.01em]'> each.title </a>
                        </li>)
                }
            </nav>
        </>
    )
}

export default Sidebar;