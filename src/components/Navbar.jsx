import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar({ authenticated }) {
	return (
		<nav
			style={{
				display: 'flex',
				justifyContent: 'center',
				marginBottom: '1rem',
			}}
		>
			<div className='nav'>
				<NavLink
					to='/'
					exact
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					Home
				</NavLink>
			</div>
			{authenticated ? (
				<div className='nav'>
					<NavLink
						to='/chat'
						className={({ isActive }) => (isActive ? 'active' : 'inactive')}
					>
						Chat
					</NavLink>
				</div>
			) : (
				<>
					<div className='nav'>
						<NavLink
							to='/login'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							Login
						</NavLink>
					</div>
					<div className='nav'>
						<NavLink
							to='/signup'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							SignUp
						</NavLink>
					</div>
				</>
			)}
		</nav>
	);
}

export default Navbar;
