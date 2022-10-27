import React, { Component, Fragment } from "react";
import "./Product.css";
import { connect } from "react-redux";

import CardProduct from "./CardProduct/CardProduct";
import { GlobalConsumer } from "../../../context/context";

class Product extends Component {
	render() {
		return (
			<Fragment>
				<div className="header">
					<div className="logo">
						<img src="" alt="" />
					</div>
					<div className="troley">
						<img src="" alt="" />
						<div className="count">{this.props.state.totalOrder}</div>
						{/* <div className="count">{this.props.order}</div> */}
					</div>
				</div>
				<CardProduct
					onCounterChange={(value) => this.handleCounterChange(value)}
				/>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		order: state.totalOrder,
	};
};

export default GlobalConsumer(Product);
// export default connect(mapStateToProps)(Product);
