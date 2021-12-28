import React, { createContext } from 'react';
import useHostPlace from '../hooks/useHostPlace';

export const HostPlaceContext = createContext();

const HostPlaceProvider = ({ children }) => {
	const allContexts = useHostPlace();

	return (
		<HostPlaceContext.Provider value={allContexts}>
			{children}
		</HostPlaceContext.Provider>
	);
};

export default HostPlaceProvider;
