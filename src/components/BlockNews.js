import String from './String';

function BlockNews() {
	const firstLine = {
		stringPrev: {
			text: '/images/RIA_Novosti_logo.png',
			style: 'iconImg',
		},
		stringSimple: {
			text: 'Путин упростил получение автомобильных номеров',
			style: 'stringSimple',
		}
	};
	const secondLine = {
		stringPrev: {
			text: '/images/RIA_Novosti_logo.png',
			style: 'iconImg',
		},
		stringSimple: {
			text: 'В команде Зеленского раскрыли план реформ на Украине',
			style: 'stringSimple',
		}
	};
	const thirdLine = {
		stringPrev: {
			text: '/images/900px-Logo-Kommersant.png',
			style: 'iconImg',
		},
		stringSimple: {
			text: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье',
			style: 'stringSimple',
		}
	};
	const fourthLine = {
		stringPrev: {
			text: '/images/900px-Logo-NG.png',
			style: 'iconImg',
		},
		stringSimple: {
			text: 'Суд закрыл дело Демпартии США против России',
			style: 'stringSimple',
		}
	};
	const fifthLine = {
		stringPrev: {
			text: '/images/900px-Logo-Kommersant.png',
			style: 'iconImg',
		},
		stringSimple: {
			text: 'На Украине призвали создать ракеты для удара по Москве',
			style: 'stringSimple',
		}
	};

	return (
		<div className='blockNewsWrapper'>
			<String {...firstLine} />
			<String {...secondLine} />
			<String {...thirdLine} />
			<String {...fourthLine} />
			<String {...fifthLine} />
		</div>
	);
}

export default BlockNews;