function SearchField(props) {
	const HandleSubmit = () => { };
	return (
		<div className='searcField__conteiner'>
			<div className={props.logo} aria-label="Яндекс"></div>
			<span className="searchField__inner">
				<form onSubmit={HandleSubmit}>
					<input type='text' className='searchField'></input>
					<button type='submit' className='searchButton'>Найти</button>
				</form>
			</span>

		</div>
	);
}

export default SearchField;