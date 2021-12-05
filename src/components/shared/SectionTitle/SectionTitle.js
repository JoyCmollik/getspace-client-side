import React from 'react';

const SectionTitle = ({ title, mode }) => {
	return (
		<div className='space-y-4 mb-10 text-center'>
			<h4
				className={`text-2xl font-semibold capitalize ${
					mode === 'dark' && 'text-white'
				}`}
			>
				{title}
			</h4>
			<p className='mx-auto bg-brand' style={{ width: 70, height: 1 }} />
		</div>
	);
};

export default SectionTitle;
