import { nanoid } from 'nanoid';
import '../assets/css/Services.css';

function Services(props) {
	const asd = props.services;
	const serviceLinks = asd.map(item => <a href={item.link} key={nanoid()}>{item.name}</a>);
	return (
		<div className='services'>
			{serviceLinks}
		</div>
	);
}

export default Services;