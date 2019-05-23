import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './styles.scss';

const fetchNewQuote = () => axios.get('https://quota.glitch.me/random').then(response => response.data);

function App() {
	const [quote, setQuote] = useState('');
	const [author, setAuthor] = useState('');

	const showNewQuote = async () => {
		const newQuote = await fetchNewQuote();

		setQuote(newQuote.quoteText);
		setAuthor(newQuote.quoteAuthor);
	};

	useEffect(() => {
		showNewQuote();
	}, []);

	return (
		<section id="quote-box">
			<header>Random Quote</header>
			<main>
				<div className="card" id="text">
					<div className="quote-container">
						<i className="fa fa-quote-left quote-icon" />
						<span className="quote">{quote}</span>
					</div>
					<div className="card-body">
						<p className="card-text" id="author">
							{author}
						</p>
					</div>
				</div>
			</main>
			<footer>
				<button type="button" className="btn btn-success" id="new-quote" onClick={showNewQuote}>
					Get new Quote
				</button>
				<a
					href="https://twitter.com/intent/tweet"
					className="btn btn-link"
					id="tweet-quote"
					target="_blank"
					rel="noopener noreferrer"
				>
					Tweet Quote
				</a>
			</footer>
		</section>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
