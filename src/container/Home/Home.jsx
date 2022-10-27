import React, { Component, Fragment, createContext } from "react";
import YoutubeComp from "./../../component/YoutubeComponent/YoutubeComp";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BlogPost } from "./../pages/BlogPost/BlogPost";
import Product from "./../pages/Product/Product";
import LifeCycleComp from "./../pages/LifeCycleComp/LifeCycleComp";
import YoutubeCompPage from "./../pages/YoutubeCompPage/YoutubeCompPage";
import { DetailPost } from "./../pages/BlogPost/DetailPost/DetailPost";
import GlobalProvider from "./../../context/context";
import Hooks from "./../pages/Hooks/Hooks";

class Home extends Component {
	componentDidMount() {
		// this.setState({
		// 	showComponent: false,
		// });
	}
	render() {
		return (
			<Router>
				<Link
					to="/"
					className="inline-block mx-2 my-2 font-semibold text-blue-600 underline transition hover:text-blue-800"
				>
					Blog
				</Link>
				<Link
					to="/product"
					className="inline-block mx-2 my-2 font-semibold text-blue-600 underline transition hover:text-blue-800"
				>
					Product
				</Link>
				<Link
					to="/lifecycle"
					className="inline-block mx-2 my-2 font-semibold text-blue-600 underline transition hover:text-blue-800"
				>
					LifeCycle
				</Link>
				<Link
					to="/youtube"
					className="inline-block mx-2 my-2 font-semibold text-blue-600 underline transition hover:text-blue-800"
				>
					Youtube Component
				</Link>
				<Link
					to="/hooks"
					className="inline-block mx-2 my-2 font-semibold text-blue-600 underline transition hover:text-blue-800"
				>
					Hooks
				</Link>
				{/* <p>Youtube Component</p>
					<hr />
					<YoutubeComp time="7.12" title="Title 1" desc="Desc 1" />
					<YoutubeComp time="8.12" title="Title 2" desc="Desc 2" />
					<YoutubeComp time="1.12" title="Title 3" desc="Desc 3" />
					<YoutubeComp time="2.12" title="Title 4" desc="Desc 4" />
					<YoutubeComp />
					<p className="mt-4 font-bold">Counter</p>
					<hr />
					<Product />
					<p className="mt-4 font-bold">LifeCycleComp</p>
					<hr />
					{this.state.showComponent ? <LifeCycleComp /> : null}
					<p className="mt-4 font-bold">Blog Post</p>
					<hr />
					<BlogPost /> */}
				{/* <Link to="/">Home</Link> */}
				<Route path="/" exact component={BlogPost} />
				<Route path="/detail-post/:id" component={DetailPost} />
				<Route path="/product" component={Product} />
				<Route path="/lifecycle" component={LifeCycleComp} />
				<Route path="/youtube" component={YoutubeCompPage} />
				<Route path="/hooks" component={Hooks} />
			</Router>
		);
	}
}

export default GlobalProvider(Home);
