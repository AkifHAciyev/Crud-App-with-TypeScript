import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
	const [showBtn, setShowBtn] = useState<any>(false);

	return (
		<div className="App">
			<Header showBtn={showBtn} setShowBtn={setShowBtn} />
			<Main showBtn={showBtn} setShowBtn={setShowBtn} />
		</div>
	);
}

export default App;
