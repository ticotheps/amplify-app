import React from 'react';
import './App.css';

import family from './assets/family.png';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Hello, World!</h1>
				<h2>This is my first serverless AWS app!</h2>
				<img src={family} className='App-logo' alt='wife, daughter, and husband in fancy wedding attire' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
