import { Dispatch, SetStateAction, useRef } from 'react';

export interface Props {
	showBtn: boolean;
	setShowBtn: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setShowBtn }: Props) => {
	const userName = useRef<HTMLInputElement | null>(null);
	const getUser = localStorage.getItem('name');
	const handleSubmit = () => {
		if (userName.current?.value === 'login') {
			localStorage.setItem('name', 'login');
			setShowBtn(true);
		}
	};

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
