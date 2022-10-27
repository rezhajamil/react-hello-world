import React, { Component } from "react";

class LifeCycleComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 1,
		};
		console.log("constructor");
	}

	static getDerivedStateFromProps(props, state) {
		console.log("getDerivedStateFromProps");
		return null;
	}

	componentDidMount() {
		console.log("componentDidMount");
		// this.setState({
		// 	count: 2,
		// });
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log("shouldComponentUpdate");
		return nextState.count < 5;
	}
	getSnapshotBeforeUpdate = (prevProps, prevState) => {
		console.log("getSnapshotBeforeUpdate");
		return null;
	};
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("componentDidUpdate");
	}
	componentWillUnmount() {
		console.log("componentWillUnmount");
	}

	changeCount = () => {
		// alert("a");
		this.setState({
			count: this.state.count + 1,
		});
	};
	render() {
		console.log("render");
		return (
			<button className="p-2 text-white bg-blue-600" onClick={this.changeCount}>
				Component Button {this.state.count}
			</button>
		);
	}
}

export default LifeCycleComp;
