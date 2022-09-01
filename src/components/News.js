import '../assets/css/News.css'

function News(props) {

	return (
		<div className='news'>
			{props.children[0]}
			{props.children[1]}
			{props.children[2]}
		</div>
	);
}

export default News;