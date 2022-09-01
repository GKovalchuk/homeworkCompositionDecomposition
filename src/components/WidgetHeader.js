function WidgetHeader(props) {
	const widgetTitle = props.widgetTitle;
	return (
		<h2 className='widgetTitle'>
			{widgetTitle}
		</h2>
	);
}

export default WidgetHeader;