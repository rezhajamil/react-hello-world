import React, { Component } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Post from "./../../../component/Post/Post";
import API from "./../../../services/index";

export class BlogPost extends Component {
	state = {
		post: [],
		comment: [],
		form: {
			id: 1,
			title: "",
			body: "",
		},
		isUpdate: false,
	};

	getAPI = () => {
		API.getNewsBlog().then((res) => {
			this.setState({
				post: res,
			});
		});

		API.getComments().then((res) => {
			this.setState({
				comment: res,
			});
		});
	};

	postDataToAPI = () => {
		API.postNewsBlog(this.state.form).then((res) => {
			this.getAPI();
			this.setState({
				form: {
					id: 1,
					title: "",
					body: "",
				},
			});
		});
	};

	putDataToAPI = () => {
		API.updateNewsBlog(this.state.form, this.state.form.id).then((res) => {
			this.getAPI();
			this.setState({
				form: {
					id: 1,
					title: "",
					body: "",
				},
			});
		});
	};

	handleRemove = (id) => {
		API.deleteNewsBlog(id).then((res) => {
			this.getAPI();
		});
	};

	handleUpdate = (data) => {
		this.setState({
			form: data,
			isUpdate: true,
		});
	};

	handleFormChange = (data) => {
		let formNew = { ...this.state.form };
		let timestamp = new Date().getTime();
		if (!this.state.isUpdate) {
			formNew["id"] = timestamp;
		}
		formNew[data.target.name] = data.target.value;
		let title = data.target.value;
		this.setState(
			{
				form: formNew,
			},
			() => console.log(this.state.form)
		);
	};

	handleSubmit = () => {
		if (this.state.isUpdate) {
			this.putDataToAPI();
		} else {
			this.postDataToAPI();
		}
	};

	handleDetail = (id) => {
		this.props.history.push(`/detail-post/${id}`);
	};

	componentDidMount() {
		// fetch("https://jsonplaceholder.typicode.com/posts")
		// 	.then((res) => res.json())
		// 	.then((json) => {
		// 		this.setState({
		// 			post: json,
		// 		});
		// 	});
		this.getAPI();
	}
	render() {
		return (
			<>
				<div>BlogPost</div>
				<div className="flex flex-col my-4 form-add-post gap-y-2">
					<input
						type="text"
						name="title"
						id="title"
						placeholder="Title"
						value={this.state.form.title}
						className="px-3 py-2 border-2 border-indigo-600 rounded"
						onChange={this.handleFormChange}
					/>
					<input
						type="text"
						name="body"
						id="body"
						placeholder="Body"
						value={this.state.form.body}
						className="px-3 py-2 border-2 border-indigo-600 rounded"
						onChange={this.handleFormChange}
					/>
					<button
						type="submit"
						className="p-4 font-semibold text-white bg-blue-600"
						onClick={this.handleSubmit}
					>
						Simpan
					</button>
				</div>
				{this.state.post.map((post) => {
					return (
						<Post
							key={post.id}
							data={post}
							remove={this.handleRemove}
							update={this.handleUpdate}
							goDetail={this.handleDetail}
						/>
					);
				})}
				{this.state.comment.map((comment) => {
					return (
						<div
							key={comment.id}
							className="p-4 mx-4 my-2 bg-white rounded-lg shadow-xl"
						>
							<p className="">{comment.body}</p>
						</div>
					);
				})}
			</>
		);
	}
}

export default BlogPost;
