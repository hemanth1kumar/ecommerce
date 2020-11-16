import React from "react";
import { collections } from "../../data";
import CollectionPreview from "../../components/collection-preview";

export default class Shop extends React.PureComponent {
	constructor() {
		super();
		this.state = {
			collections: collections
		};
	}
	render() {
		const collections = this.state.collections;
		return (
			<div className="shop-page">
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</div>
		);
	}
}
