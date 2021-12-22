import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home/Home';
import PlaceDetailHome from './components/pages/PlaceDetail/PlaceDetailHome/PlaceDetailHome';
import SearchResultsHome from './components/pages/SearchResults/SearchResultsHome/SearchResultsHome';
import AdminDashboardHome from './components/pages/AdminDashboard/AdminDashboardHome/AdminDashboardHome';
import HostPlaceHome from './components/pages/HostPlace/HostPlaceHome/HostPlaceHome';
import UserDashboard from './components/pages/UserDashboard/UserDashboard/UserDashboard';
import AuthenticationHome from './components/pages/Authentication/AuthenticatonHome/AuthenticationHome';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='detail' element={<PlaceDetailHome />} />
					<Route path='results' element={<SearchResultsHome />} />
					<Route
						path='authenticate/*'
						element={<AuthenticationHome />}
					/>
					<Route
						path='dashboard/user/*'
						element={<UserDashboard />}
					/>
					<Route
						path='dashboard/admin'
						element={<AdminDashboardHome />}
					/>
					<Route path='host/*' element={<HostPlaceHome />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
