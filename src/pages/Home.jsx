import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
				marginTop: '5rem',
			}}
		>
			<h1>
				Welcome to <Link to='/'>Chatty</Link>
			</h1>
		</div>
	);
}

export default Home;
