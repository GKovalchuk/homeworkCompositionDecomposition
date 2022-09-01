import '../assets/css/Search.css';

function Search(props) {
	return (
		<div className='search'>
			{props.children[0]}
			{props.children[1]}
			{props.children[2]}
			{props.children[3]}
		</div>
	);
}

export default Search;