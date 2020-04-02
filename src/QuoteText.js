import React, { Component } from 'react';

class QuoteText extends Component {
    
    render() {
        return (
            <div id="quote-text">
                <h5 id="text">{this.props.text}</h5>
                <h6 id="author">~{this.props.author}</h6>
            </div>
        )
    }
}

export default QuoteText;