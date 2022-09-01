import React from 'react';
import '../assets/css/String.css'

// Файл оставлен как пример передачи ключа как значения в объекте

function String(props) {
	const stringLPrevText = props.stringPrevText;
	const stringSimpleText = props.stringSimpleText;
	const stringSpecialText = props.stringSpecialText;
	function visible(chunkString) {
		if (!chunkString) {
			return null
		}
		if (chunkString[0] === '/') {
			// Здесь мы присваиваем класс по имени ключа с помощью функции. В функцию передаем объект с парами "ключ-значение" и значение, по которому ищем ключ
			return <img src={chunkString} className={getClassName(props, chunkString)} alt=''></img>
		}
		return <p className={getClassName(props, chunkString)}>{chunkString}</p>
	}
	function getClassName(props, chunkString) {
		// Здесь мы обращаемся к ключам объекта(Object.keys()). Какого объекта? - (props). С помощью .find возвращаем ключ от искомого значения 
		return Object.keys(props).find(key => props[key] === chunkString);
	}

	return (
		<div className="string">
			{visible(stringLPrevText)}
			{visible(stringSimpleText)}
			{visible(stringSpecialText)}
		</div>
	);
}

export default String;