import React, { Component } from "react";
import "../Product.css";
import Counter from "./Counter";
class CardProduct extends Component {
	render() {
		return (
			<>
				<div className="card h-fit pb-4">
					<div className="img-thumb-prod">
						<img
							src="https://i.ytimg.com/vi/ty7jcTPKfhc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAM3xGQproUoCnGHnVGoKaADfLN4Q"
							alt=""
						/>
					</div>
					<p className="product-title">Daging Ayam</p>
					<p className="product-price">Rp.410,000</p>
					<Counter
						onCounterChange={(value) => this.props.onCounterChange(value)}
					/>
				</div>
			</>
		);
	}
}

export default CardProduct;
