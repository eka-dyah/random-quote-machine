import React, { Component } from "react";

class Button extends Component {
	render() {
		return (
			<div className="d-flex flex-row justify-content-around" id="button">
				<button
					className="btn btn-primary btn-lg"
					id="new-quote"
					onClick={this.props.newQuote}
					title="New Quote!"
				>
					New Quote
				</button>
				<a
					className="twitter-share-button"
					id="tweet-quote"
					href={this.props.url}
					target="_blank"
					rel="noopener noreferrer"
					data-size="large"
					title="Tweet This!"
				>
					<i className="fa fa-twitter-square fa-lg"></i>
				</a>
			</div>
		);
	}
}

export default Button;
