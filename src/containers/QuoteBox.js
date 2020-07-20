import React, { Component } from 'react';
import Button from "../components/Button";
import QuoteText from "../components/QuoteText";
import { color } from '../shared/colors';

class QuoteBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            quote: '',
            author: '',
            color: '',
            error: null
        }
    }
    componentDidMount() {
        const myjsonstring = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
        fetch(myjsonstring)
            .then(res => res.json())
            .then(data => {
                const num = Math.floor(Math.random() * data.quotes.length);
                const quote = data.quotes[num].quote;
                const author = data.quotes[num].author;
                this.setState({
                    quotes: data.quotes,
                    quote: quote,
                    author: author
                });
            }).then(() => this.newQuotes())
            .catch(error => {
                this.setState({
                    error: error.message,
                })
            });
    }
    newQuotes() {
        const num = Math.floor(Math.random() * this.state.quotes.length);
        const quote = this.state.quotes[num].quote;
        const author = this.state.quotes[num].author;
        this.setState({
            quote: quote,
            author: author
        });
        const colorNum = Math.floor(Math.random() * color.length);
        document.body.style.backgroundColor = color[colorNum].background;
        document.getElementById('quote-box').style.backgroundColor = color[colorNum].box;
        document.getElementById('quote-box').style.borderColor = color[colorNum].border;
    }

    render() {
        const quote = this.state.quote;
        const author = this.state.author;
        const twiturl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('Quote of the Day: \n' + quote + '\n~ ' + author);
        
        if (this.state.error) {
            return (
                <div id="quote-box">
                    <h3>{this.state.error}</h3>
                </div>
            )
        } else {
            return (
                <div id="quote-box">
                    <QuoteText text={quote} author={author} />
                    <Button newQuote={this.newQuotes.bind(this)} url={twiturl} />
                </div>
            )
        }
    }
}

export default QuoteBox;