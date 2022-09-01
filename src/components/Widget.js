import String from './String';
import { nanoid } from 'nanoid';
import WidgetHeader from './WidgetHeader';
import '../assets/css/Widget.css';

function Widget(props) {

	const widgetImage = (image) => <div className='imageWidget'><img src={image.text} className={image.style} alt="" /></div>;
	const widgetBody = props.string.map(item =>
		< String  {...item} key={nanoid()} />)
	return (
		<div className='widget'>
			{props.image ? widgetImage(props.image) : null}
			<WidgetHeader widgetTitle={props.title} />
			{widgetBody}
		</div>
	);
}

export default Widget;