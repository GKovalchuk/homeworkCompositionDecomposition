import String from './String';

function Ticker() {
	const firstExachangeRate = {
		stringPrev: {
			text: 'USD MOEX',
			style: 'boldText',
		},
		stringSimple: {
			text: '63,52',
			style: 'stringSimple boldText',
		},
		stringSpecial: {
			text: '+0,09',
			style: 'stringSpecial boldText',
		}
	};
	const secondExachangeRate = {
		stringPrev: {
			text: 'EUR MOEX',
			style: 'boldText',
		},
		stringSimple: {
			text: '70,86',
			style: 'stringSimple boldText',
		},
		stringSpecial: {
			text: '+0,14',
			style: 'stringSpecial boldText',
		}
	};
	const thirdExachangeRate = {
		stringPrev: {
			text: 'НЕФТЬ',
			style: 'boldText',
		},
		stringSimple: {
			text: '64,90',
			style: 'stringSimple boldText',
		},
		stringSpecial: {
			text: '+1,63%',
			style: 'stringSpecial boldText',
		}
	};

	const more = {
		stringSpecial: {
			text: '...',
			style: 'stringSpecial boldText',
		}
	};

	return (
		<div className='ticker'>
			<String {...firstExachangeRate} />
			<String {...secondExachangeRate} />
			<String {...thirdExachangeRate} />
			<String {...more} />
		</div>
	);
}

export default Ticker;
