import React from 'react';
import '../assets/css/String.css'

function String(props) {
	const stringLPrev = props.stringPrev;
	const stringSimple = props.stringSimple;
	const stringSpecial = props.stringSpecial;

	function visible(chunkString) {
		if (!chunkString) {
			return null
		}
		if (chunkString.text[0] === '/') {
			return <div><img src={chunkString.text} className={chunkString.style} alt=''></img></div>
		}
		return <div className={chunkString.style}>{chunkString.text}</div>
	}

	return (
		<div className="string">
			{visible(stringLPrev)}
			{visible(stringSimple)}
			{visible(stringSpecial)}
		</div>
	);
}

export default String;