import React from 'react';
import Popper from '@mui/material/Popper';

const CustomPopper = ({ children, popperAnchor, setPopperAnchor }) => {
	const handleClose = () => {
		setPopperAnchor(() => null);
	};

	return (
		<>
			<Popper
				open={Boolean(popperAnchor)}
				anchorEl={popperAnchor}
				placement='bottom'
				style={{ zIndex: 999 }}
			>
				<div
					className='bg-white rounded-lg border box-shadow p-4 mt-1 space-y-4'
					style={{ width: 375 }}
				>
					{children}
					<button
						className='w-full py-1 border border-black rounded-lg'
						onClick={handleClose}
					>
						Done
					</button>
				</div>
			</Popper>
		</>
	);
};

export default CustomPopper;
