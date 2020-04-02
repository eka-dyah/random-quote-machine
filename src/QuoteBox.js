import React, { Component } from 'react';
import Button from "./Button";
import QuoteText from "./QuoteText";

const color = [
    {
        background: '#9a919a',
        border: 'rgb(53, 50, 50)',
        box: '#d6d6d6',
    },
    {
        background: 'rgb(93, 163, 236)',
        border: 'rgb(33, 127, 146)',
        box: '#a9e7ff',
    },
    {
        background: 'rgb(84, 170, 95)',
        border: 'rgb(51, 123, 65)',
        box: '#a9ffd3',
    },
    {
        background: 'rgb(189, 90, 113)',
        border: 'rgb(132, 64, 85)',
        box: '#ffcee7',
    },
    {
        background: 'rgb(150, 74, 174)',
        border: 'rgb(106, 57, 130)',
        box: '#e5b7fd',
    },
    {
        background: 'rgb(81, 70, 174)',
        border: 'rgb(49, 42, 130)',
        box: '#b5b0fb',
    },
    {
        background: 'rgb(174, 151, 70)',
        border: 'rgb(115, 107, 41)',
        box: '#ece97b',
    },
    {
        background: 'rgb(174, 123, 70)',
        border: 'rgb(115, 76, 41)',
        box: '#ecc97b',
    }
];

class QuoteBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote:'',
            author: '',
            color:''
        }
    }
    componentDidMount() {
        this.newQuotes();            
    }
    newQuotes(){
        const myjsonstring = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
        fetch(myjsonstring)
            .then(res => res.json())
            .then(data => {
                const num = Math.floor(Math.random() * data.quotes.length);
                const quote = data.quotes[num].quote;
                const author = data.quotes[num].author;
                this.setState({
                    quote: quote,
                    author: author
                });
            });
        const colorNum = Math.floor(Math.random() * color.length);
        document.body.style.backgroundColor = color[colorNum].background;
        document.getElementById('quote-box').style.backgroundColor = color[colorNum].box;
        document.getElementById('quote-box').style.borderColor = color[colorNum].border;
    }
    
    render() {
        const quote = this.state.quote;
        const author = this.state.author;
        const twiturl = 'https://twitter.com/intent/tweet?text='+ encodeURIComponent('Quote of the Day: \n' + quote + '\n~ ' + author);
        return (
            <div id="quote-box">
                <QuoteText text={this.state.quote} author={this.state.author}/>
                <Button newQuote={this.newQuotes.bind(this)} url={twiturl}/>
            </div>
        )
    }
}

export default QuoteBox;