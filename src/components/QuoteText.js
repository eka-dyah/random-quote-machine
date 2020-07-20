import React, { Component } from 'react';

class QuoteText extends Component {
    
    render() {
        return (
            <div id="quote-text">
                <h4 id="text">{this.props.text}</h4>
                <h5 id="author">~{this.props.author}</h5>
            </div>
        )
    }
}

export default QuoteText;