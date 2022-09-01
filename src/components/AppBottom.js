import Widget from "./Widget.js";
import '../assets/css/AppBottom.css'

function AppBottom() {
	const weather = {
		title: 'Погода',
		string: [{
			stringPrev: {
				text: '/images/rain.png',
				style: 'bigImage',
			},
			stringSimple: {
				text: '+17\u00B0',
				style: 'bigTextForImage',
			},
			stringSpecial: {
				text: 'Утром +17, \n Днем + 20',
				style: 'stringSimple spaceWrap',
			}
		}],
	};
	const maps = {
		title: 'Карта Германии',
		string: [{
			stringSimple: {
				text: 'Расписания',
				style: 'stringSimple',
			},
		}],
	};
	const broadcast = {
		title: 'Эфир',
		string: [{
			stringPrev: {
				text: '/images/iconPlay.png',
				style: 'iconImg',
			},
			stringSimple: {
				text: 'Управление как искусство',
				style: 'stringSimple',
			},
			stringSpecial: {
				text: 'Успех',
				style: 'stringSpecial',
			}
		}, {
			stringPrev: {
				text: '/images/iconPlay.png',
				style: 'iconImg',
			},
			stringSimple: {
				text: 'Ночь. Мир в это время',
				style: 'stringSimple',
			},
			stringSpecial: {
				text: 'earth TV',
				style: 'stringSpecial',
			}
		}, {
			stringPrev: {
				text: '/images/iconPlay.png',
				style: 'iconImg',
			},
			stringSimple: {
				text: 'Андрей Возн...',
				style: 'stringSimple',
			},
			stringSpecial: {
				text: 'Совершенно секретно',
				style: 'stringSpecial',
			}
		}]
	};

	const frequent = {
		title: 'Погода',
		string: [{
			stringPrev: {
				text: 'Недвижимость',
				style: 'boldText',
			},
			stringSimple: {
				text: '- о сталинках',
				style: 'stringSimple',
			}
		}, {
			stringPrev: {
				text: 'Маркет',
				style: 'boldText',
			},
			stringSimple: {
				text: '- люстры и светильники',
				style: 'stringSimple',
			}
		}, {
			stringPrev: {
				text: 'Авто.ру',
				style: 'boldText',
			},
			stringSimple: {
				text: '- привод 4х4 500 000',
				style: 'stringSimple',
			}
		}]
	};
	const TVGuide = {
		title: 'Телепрограмма',
		string: [{
			stringPrev: {
				text: '02:00',
				style: 'stringSimple',
			},
			stringSimple: {
				text: 'ТНТ.Best',
				style: 'stringSimple',
			},
			stringSpecial: {
				text: 'ТНТ International',
				style: 'stringSpecial',
			}
		}, {
			stringPrev: {
				text: '02:15',
				style: 'stringSimple',
			},
			stringSimple: {
				text: 'Джинглики',
				style: 'stringSimple',
			},
			stringSpecial: {
				text: 'Карусель INT',
				style: 'stringSpecial',
			}
		}, {
			stringPrev: {
				text: '02:25',
				style: 'stringSimple',
			},
			stringSimple: {
				text: 'Наедине со всеми',
				style: 'stringSimple',
			},
			stringSpecial: {
				text: 'Первый',
				style: 'stringSpecial',
			}
		}]
	};
	return (
		<div className="appBottom">
			<Widget {...weather} />
			<Widget {...frequent} />
			<Widget {...maps} />
			<Widget {...TVGuide} />
			<Widget {...broadcast} />
		</div>
	);
}

export default AppBottom;