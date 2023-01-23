import { Dispatch, SetStateAction, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

export interface Props {
	showBtn: boolean;
	setShowBtn: Dispatch<SetStateAction<boolean>>;
}

function App() {
	const [showBtn, setShowBtn] = useState(false);

	return (
		<div className="App">
			<Header showBtn={showBtn} setShowBtn={setShowBtn} />
			<Main showBtn={showBtn} />
		</div>
	);
}

export default App;
