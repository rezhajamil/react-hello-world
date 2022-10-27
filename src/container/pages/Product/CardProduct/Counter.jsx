import React, { Component } from "react";
import { connect } from "react-redux";
import { RootContext } from "./../../../Home/Home";
import { GlobalConsumer } from "../../../../context/context";

class Counter extends Component {
	// state = {
	// 	order: 4,
	// };
	// handleCounterChange = (val) => {
	// 	this.props.onCounterChange(val);
	// };

	// handlePlus = () => {
	// 	this.setState(
	// 		{
	// 			order: this.state.order + 1,
	// 		},
	// 		() => {
	// 			this.handleCounterChange(this.state.order);
	// 		}
	// 	);
	// };

	// handleMinus = () => {
	// 	if (this.state.order > 0) {
	// 		this.setState(
	// 			{
	// 				order: this.state.order - 1,
	// 			},
	// 			() => {
	// 				this.handleCounterChange(this.state.order);
	// 			}
	// 		);
	// 	}
	// };
	render() {
		return (
			<div className="mt-4 counter">
				<button
					className="minus"
					onClick={() => this.props.dispatch({ type: "MINUS_ORDER" })}
				>
					-
				</button>
				{/* <button className="minus" onClick={this.props.handleMinus}>
					-
				</button> */}
				{/* <input type="text" name="" id="" value={this.props.order} /> */}
				<input type="text" name="" id="" value={this.props.state.totalOrder} />
				<button
					className="plus"
					onClick={() => this.props.dispatch({ type: "PLUS_ORDER" })}
				>
					+
				</button>
				{/* <button className="plus" onClick={this.props.handlePlus}>
					+
				</button> */}
			</div>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		order: state.totalOrder,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		handlePlus: () => dispatch({ type: "PLUS_ORDER" }),
// 		handleMinus: () => dispatch({ type: "MINUS_ORDER" }),
// 	};
// };

export default GlobalConsumer(Counter);
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
