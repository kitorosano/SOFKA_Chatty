import React, { useEffect, useState } from 'react';
import {
	Route,
	BrowserRouter as Router,
	Routes,
	Navigate,
	Outlet,
} from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';

function PrivateOutlet({ authenticated, children }) {
	return authenticated ? children : <Navigate to='/login' />;
}
function PublicOutlet({ authenticated, children}) {
	return !authenticated ? children : <Navigate to='/chat' />;
}

function App() {
	const [state, setState] = useState({
		loading: false,
		authenticated: false,
	});

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user)
				setState({
					loading: false,
					authenticated: true,
				});
			else
				setState({
					loading: false,
					authenticated: false,
				});
		});
	}, []);

	return state.loading === true ? (
		<h2>Loading...</h2>
	) : (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route
					path='/chat'
					element={
						<PrivateOutlet authenticated={state.authenticated}>
							<Chat />
						</PrivateOutlet>
					}
				/>

				<Route
					path='/signup'
					element={
						<PublicOutlet authenticated={state.authenticated}>
							<Signup />
						</PublicOutlet>
					}
				/>

				<Route
					path='/login'
					element={
						<PublicOutlet authenticated={state.authenticated}>
							<Login />
						</PublicOutlet>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
