import React, { Component, Fragment } from "react";
import YoutubeComp from "./../../../component/YoutubeComponent/YoutubeComp";
import { connect } from "react-redux";
import { GlobalConsumer } from "../../../context/context";

class YoutubeCompPage extends Component {
	render() {
		return (
			<Fragment>
				<p>Youtube Component</p>
				<hr />
				<YoutubeComp time="7.12" title="Title 1" desc="Desc 1" />
				<YoutubeComp time="8.12" title="Title 2" desc="Desc 2" />
				<YoutubeComp time="1.12" title="Title 3" desc="Desc 3" />
				<YoutubeComp time="2.12" title="Title 4" desc="Desc 4" />
				<YoutubeComp />

				<span className="inline-block my-4 text-2xl font-bold">
					{/* Total Order : {this.props.order} */}
					Total Order : {this.props.state.totalOrder}
				</span>
			</Fragment>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		order: state.totalOrder,
// 	};
// };

export default GlobalConsumer(YoutubeCompPage);
// export default connect(mapStateToProps)(YoutubeCompPage);
