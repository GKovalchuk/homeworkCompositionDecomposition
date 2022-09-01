import banner from '../assets/images/banner.jpg';

import '../assets/css/Banner.css';

function Banner() {
	return (
		<div className='banner'>
			<img src={banner} alt='' />
		</div>
	);
}

export default Banner;