import { Alert, AlertTitle } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import useAxios from '../../../../hooks/useAxios';
import useFirebase from '../../../../hooks/useFirebase';
import loaderImage from '../../../../images/icons/loader.png';
import MyBookingItem from './MyBookingItem';

const MyBookings = () => {
	const [myBookings, setMyBookings] = useState(null);
	const [isNoBookings, setIsNoBookings] = useState(false);
	const { client } = useAxios();
	const { user } = useFirebase();

	useEffect(() => {
		if (user) {
			client
				.get(`reservation/${user?.uid}`)
				.then((response) => {
					if (!response.data.length) {
						setIsNoBookings(true);
					}
					setMyBookings(response.data);
					setIsNoBookings(false);
				})
				.then((error) => {
					console.log(error);
				});
		}
	}, [user]);

	if (isNoBookings) {
		return (
			<div className='py-10'>
				<Alert severity='info'>
					<AlertTitle>Things to know</AlertTitle>
					Currently You Have No Bookings!
				</Alert>
			</div>
		);
	}

	return (
		<div className='py-10'>
			{!myBookings ? (
				<div className='flex justify-center items-center'>
					<img src={loaderImage} alt='load' />
				</div>
			) : (
				<div className='space-y-4'>
					{myBookings.map((myBooking) => (
						<MyBookingItem
							key={myBooking._id}
							myBooking={myBooking}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default MyBookings;
