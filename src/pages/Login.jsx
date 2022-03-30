import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signin, signInWithGoogle, signInWithGitHub } from '../helpers/auth';;

function Login() {
	const [error, setError] = useState(null);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);

		try {
			await signin(email, password);
		} catch (e) {
			setError(e.message);
		}
	};

  
  const googleSignIn = async() => {
    try {
      await signInWithGoogle();
    } catch (e) {
			setError(e.message);
    }
  }

  const githubSignIn = async() => {
    try {
      await signInWithGitHub();
    } catch (e) {
      setError(e.message);
    }
  }


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
			<form autoComplete='off' onSubmit={handleSubmit}>
				<h1>
					Login to <Link to='/'>Chatty</Link>
				</h1>
				<p>Fill in the form below to login to your account.</p>
				<div>
					<input
						placeholder='Email'
						name='email'
						type='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					></input>
				</div>
				<div>
					<input
						placeholder='Password'
						name='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						type='password'
					></input>
				</div>
				<div>
					{error ? <p>{error}</p> : null}
					<button type='submit'>Login</button>
					<p>Or</p>
					<button onClick={googleSignIn} type='button'>
						Sign up with Google
					</button>
					<button type='button' onClick={githubSignIn}>
						Sign up with GitHub
					</button>
				</div>
				<hr></hr>
				<p>
					Don't have an account? <Link to='/signup'>Sign up</Link>
				</p>
			</form>
		</div>
	);
}

export default Login;
