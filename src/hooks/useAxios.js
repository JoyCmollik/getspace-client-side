import axios from 'axios';

const useAxios = () => {
	const client = axios.create({
		baseURL: 'https://localhost:5000/',
	});
	const admin = axios.create({
		baseURL: 'https://localhost:5000/',
	});
	return { client, admin };
};

export default useAxios;
