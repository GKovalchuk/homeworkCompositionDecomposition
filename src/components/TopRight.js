import Widget from './Widget';

function TopRight() {
	const widgetWithBanner = {
		image: {
			text: '/images/widgetImage.jpg',
			style: 'roundImage'
		},
		title: 'Работа над ошибками',
		string: [{
			stringSimple: {
				text: 'Смотрите на Яндексе и запоминайте',
				style: 'stringSimple',
			}
		}],
	};

	return (
		<div className='topRight'>
			<Widget {...widgetWithBanner} />
		</div>
	);
}

export default TopRight;