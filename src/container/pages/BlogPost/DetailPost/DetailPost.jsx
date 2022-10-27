import React, { Component } from "react";
import axios from "axios";

export class DetailPost extends Component {
	state = {
		post: [],
	};
	componentDidMount() {
		let id = this.props.match.params.id;
		axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
			this.setState({
				post: res.data,
			});
		});
	}
	render() {
		return (
			<>
				<div className="shadow lg-w-full px-8 py-4 mx-8 my-12">
					<span className="font-bold cursor-pointer uppercase text-3xl text-blue-600">
						{this.state.post.title}
					</span>
					<p className="font-semibold my-4">{this.state.post.body}</p>
				</div>
			</>
		);
	}
}

export default DetailPost;
