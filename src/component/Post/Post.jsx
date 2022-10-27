import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
	return (
		<div className="px-4 py-2 shadow-lg w-fit">
			<img src="https://placeimg.com/640/480/any" alt="" className="w-40" />
			<span
				className="block mt-4 text-lg font-bold transition-all hover:text-blue-600 title"
				onClick={() => props.goDetail(props.data.id)}
			>
				{props.data.title}
			</span>
			<span className="mt-2 body">{props.data.body}</span>
			<div className="flex gap-x-2">
				<button
					className="my-2 text-white bg-blue-600 border-2 shadow-sm"
					onClick={() => props.update(props.data)}
				>
					Update
				</button>
				<button
					className="my-2 text-white bg-red-600 border-2 shadow-sm"
					onClick={() => props.remove(props.data.id)}
				>
					Remove
				</button>
			</div>
		</div>
	);
};

export default Post;
