import axios from 'axios';

const useAxios = () => {
	const client = axios.create({
		baseURL: 'http://localhost:5000/',
	});
	const admin = axios.create({
		baseURL: 'http://localhost:5000/admin',
	});
	return { client, admin };
};

export default useAxios;
