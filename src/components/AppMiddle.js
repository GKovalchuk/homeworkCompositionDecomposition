import Search from "./Search";
import Services from "./Services";
import SearchField from './SearchField';
import String from './String';

import '../assets/css/Search.css';
import '../assets/css/AppMiddle.css';
import '../assets/css/Banner.css';
import banner from '../assets/images/banner.jpg';

function AppMiddle() {
	const services = [
		{ name: "Видео", link: "#" },
		{ name: "Картинки", link: "#" },
		{ name: "Новости", link: "#" },
		{ name: "Карты", link: "#" },
		{ name: "Маркет", link: "#" },
		{ name: "Переводчик", link: "#" },
		{ name: "Эфир", link: "#" },
		{ name: "ещё", link: "#" }
	];
	const logo = "home-logo__default";
	const exampleRequest = {
		stringSimple: {
			text: 'Найдется всё. Например,',
			style: 'stringSimple',
		},
		stringSpecial: {
			text: 'фаза луны сегодня',
			style: 'stringSpecial',
		}
	};

	return (
		<div className="appMiddle">
			<Search services={services}>
				<Services services={services} />
				<SearchField logo={logo} />
				<div className='searchExample'>
					<String {...exampleRequest} />
				</div>
				<div className='banner'>
					<img src={banner} alt='' />
				</div>
			</Search>
		</div>
	);
}

export default AppMiddle;

