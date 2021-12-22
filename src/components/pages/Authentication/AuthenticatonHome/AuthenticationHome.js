import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';

const AuthenticationHome = () => {
	return (
		<Routes>
			<Route index element={<Login />} />
			<Route path='register' element={<Register />} />
		</Routes>
	);
};

export default AuthenticationHome;
