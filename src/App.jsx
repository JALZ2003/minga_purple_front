import { useState } from 'react';
import Banner from './Banner.jsx';
import Footer from './Footer';
import Navbar from './Navbar';
import Carousel from './Carousel.jsx';

function App() {
	return (
		<>
			<div className='absolute flex flex-col justify-between w-full'>
				<Banner />
				<Carousel />
				<Footer />
			</div>
			<Navbar />
		</>
	)
}

export default App