import React from 'react';

function GetDate() {
	const fullDate = new Date();
	const date = fullDate.getDate()
	const month = fullDate => {
		const allMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
		return allMonth[fullDate.getMonth()]
	}
	const day = fullDate => {
		const allDay = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
		return allDay[fullDate.getDay()]
	}
	const time = fullDate => {
		let minutes = fullDate.getMinutes();
		if (minutes < 10) {
			minutes = '0' + fullDate.getMinutes();
		}
		let hours = fullDate.getHours();
		if (hours < 10) {
			hours = '0' + fullDate.getHours();
		}

		return hours + ':' + minutes
	}
	const outputDate = date + ' ' + month(fullDate) + ', ' + day(fullDate) + ' ' + time(fullDate)
	return (
		<React.Fragment>
			{outputDate}
		</ React.Fragment>
	)
}

export default GetDate;