import React, { Component, useState, useEffect } from "react";

// class Hooks extends Component {
// 	state = {
// 		count: 0,
// 	};

// 	onUpdate = () => {
// 		this.setState({
// 			count: this.state.count + 1,
// 		});
// 	};

// 	componentDidMount() {
// 		document.title = `Ganti : ${this.state.count}`;
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		document.title = `Ganti : ${this.state.count}`;
// 	}

// 	componentWillUnmount() {
// 		document.title = "React JS Hello World";
// 	}

// 	render() {
// 		return (
// 			<div className="mx-4">
// 				<p>Nilai saya saat ini adalah : {this.state.count}</p>
// 				<button className="bg-blue-600 p-2 text-white" onClick={this.onUpdate}>
// 					Update Nilai
// 				</button>
// 			</div>
// 		);
// 	}
// }

const Hooks = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `Ganti : ${count}`;

		return () => {
			document.title = "React JS Hello World";
		};
	});

	return (
		<div className="mx-4">
			<p>Nilai saya saat ini adalah : {count}</p>
			<button
				className="bg-blue-600 p-2 text-white"
				onClick={() => setCount(count + 1)}
			>
				Update Nilai
			</button>
		</div>
	);
};

export default Hooks;
