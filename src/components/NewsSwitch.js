import GetDate from './GetDate';
import String from './String';

function NewsSwitch() {
	const firstSwitch = {
		stringPrev: {
			text: 'Сейчас в СМИ',
			style: 'bigText boldText blueText',
		}
	};
	const secondSwitch = {
		stringPrev: {
			text: 'в Германии',
			style: 'bigText boldText blueText inactiveText',
		}
	};
	const thirdSwitch = {
		stringPrev: {
			text: 'Рекомендуем',
			style: 'bigText boldText blueText inactiveText',
		}
	};

	const stringDateTime = {
		stringSpecial: {
			text: <GetDate />,
			style: 'stringSpecial',
		}
	};

	return (
		<div className='newsSwitch'>
			<String {...firstSwitch} />
			<String {...secondSwitch} />
			<String {...thirdSwitch} />
			<String {...stringDateTime} />
		</div>
	);
}

export default NewsSwitch;
