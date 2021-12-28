import axios from 'axios';

const useAxios = () => {
	// https://evening-eyrie-19528.herokuapp.com/
	// http://localhost:5000/
	const client = axios.create({
		baseURL: 'https://evening-eyrie-19528.herokuapp.com/',
	});
	const admin = axios.create({
		baseURL: 'http://localhost:5000/admin',
	});
	return { client, admin };
};

export default useAxios;
