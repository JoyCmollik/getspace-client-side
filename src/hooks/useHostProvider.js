import { useContext } from 'react';
import { HostPlaceContext } from '../contexts/HostPlaceProvider';

const useHostProvider = () => {
	return useContext(HostPlaceContext);
};

export default useHostProvider;
