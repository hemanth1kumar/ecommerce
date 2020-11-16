import "./menu-item.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
	const redirectPage = () => {
		history.push(`${match.url}${linkUrl}`);
	};

	return (
		<div className={`${size} menu-item`} onClick={redirectPage}>
			<div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
