import React from "react";
import MenuItem from "../menu-item";
import "./directory.scss";
import { sections } from "../../data";
export default class Directory extends React.PureComponent {
	constructor() {
		super();
		this.state = {
			sections: sections
		};
	}
	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}
