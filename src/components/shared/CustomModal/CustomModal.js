import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { FaTimes } from 'react-icons/fa';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	outline: 'none',
};

const CustomModal = ({ modalOpen, handleModalClose, children }) => {
	return (
		<div>
			<Modal
				open={modalOpen}
				onClose={handleModalClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={modalOpen}>
					<Box sx={style}>
						<div className='bg-white rounded-3xl border-none px-2 py-1'>
							<div className='flex justify-end items-center'>
								<button
									onClick={handleModalClose}
									className='p-2 rounded-3xl text-red-100 bg-red-500'
								>
									<FaTimes />
								</button>
							</div>
							<div>{children}</div>
						</div>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default CustomModal;
