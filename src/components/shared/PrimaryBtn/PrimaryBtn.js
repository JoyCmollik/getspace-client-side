import React from 'react';

const PrimaryBtn = ({ text }) => {
	return (
		<button
			className={`bg-brand text-white font-semibold px-5 py-2 rounded-3xl`}
		>
			{text}
		</button>
	);
};

export default PrimaryBtn;
