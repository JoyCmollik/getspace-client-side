import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home/Home/Home';

function App() {
	return (
		<div className='App'>
			<h4 className='bg-dark h-10'>This is the app.</h4>
			<Home />
		</div>
	);
}

export default App;
