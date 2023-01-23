import { useRef } from 'react';

const Login = ({ showBtn, setShowBtn }) => {
	const userName = useRef<HTMLInputElement | null>(null);
	const getUser = localStorage.getItem('name');
	const handleSubmit = () => {
		if (userName.current?.value === 'login') {
			localStorage.setItem('name', 'login');
			setShowBtn(true);
		}
	};

	console.log(showBtn);

	const handleClick = () => {
		localStorage.clear();
		window.location.reload();
	};

	return (
		<>
			{getUser ? (
				<button onClick={handleClick} className="login">
					Log Out
				</button>
			) : (
				<form className="loginForm" onSubmit={handleSubmit}>
					<input placeholder="Write 'login' to login)" type="text" ref={userName} />
					<button className="login">Login</button>
				</form>
			)}
		</>
	);
};

export default Login;
