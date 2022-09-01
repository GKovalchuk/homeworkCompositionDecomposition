import News from "./News";
import NewsSwitch from './NewsSwitch';
import BlockNews from './BlockNews';
import TopRight from "./TopRight";
import Ticker from './Ticker';
import '../assets/css/AppTop.css'

function AppTop() {
	return (
		<div className="appTop">
			<News>
				<NewsSwitch />
				<BlockNews />
				<Ticker />
			</News>
			<TopRight>
			</TopRight>
		</div>
	);
}

export default AppTop;

