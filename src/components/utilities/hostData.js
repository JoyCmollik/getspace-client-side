import { FaSwimmingPool } from 'react-icons/fa';
import firepit from '../../images/icons/fire-pit.svg';
import poolball from '../../images/icons/pool-ball.svg';
import indoorFirebase from '../../images/icons/indoor-firebase.svg';
import dine from '../../images/icons/dine.svg';

const hostPlaceCategoryData = [
	{
		id: 0,
		type: 'Apartment',
		image: 'https://images.unsplash.com/photo-1595524362625-fcbe45feafa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFwYXJ0bWVudHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
		describe: [
			{
				id: 0,
				title: 'Rental unit',
				desc: 'A rented place within a multi-unit-residential building or complex.',
			},
			{
				id: 1,
				title: 'Condominium (Condo)',
				desc: 'A place within a multi-unit building or complex owned by the residents.',
			},
			{
				id: 2,
				title: 'Loft',
				desc: 'An open layout apartment or condo, which may have short interior walls',
			},
			{
				id: 3,
				title: 'Serviced apartment',
				desc: 'An apartment with hotel-like amenities serviced by a professional management company',
			},
			{
				id: 4,
				title: 'Casa particular',
				desc: 'A private room in a home that feels like a bed and breakfast in Cuba',
			},
			{
				id: 5,
				title: 'Vacation home',
				desc: 'A furnished rental property that includes a kitchen and bathroom and may offer some guest services, like a reception desk',
			},
		],
	},
	{
		id: 1,
		type: 'House',
		image: 'https://images.unsplash.com/photo-1630698388852-b8a06a8c560c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		describe: [
			{
				id: 0,
				title: 'Rental unit',
				desc: 'A rented place within a multi-unit-residential building or complex.',
			},
		],
	},
	{
		id: 2,
		type: 'Secondary unit',
		image: 'https://images.unsplash.com/photo-1515121124382-33ae0bf9417c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjB1bml0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		describe: [
			{
				id: 0,
				title: 'Rental unit',
				desc: 'A rented place within a multi-unit-residential building or complex.',
			},
		],
	},
	{
		id: 3,
		type: 'Unique space',
		image: 'https://images.unsplash.com/photo-1605127943669-7733ab15d636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dW5pcXVlJTIwcGxhY2V8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
		describe: [
			{
				id: 0,
				title: 'Rental unit',
				desc: 'A rented place within a multi-unit-residential building or complex.',
			},
		],
	},
	{
		id: 4,
		type: 'Bed and breakfast',
		image: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVkfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		describe: [
			{
				id: 0,
				title: 'Rental unit',
				desc: 'A rented place within a multi-unit-residential building or complex.',
			},
		],
	},
	{
		id: 5,
		type: 'Boutique hotel',
		image: 'https://images.unsplash.com/photo-1563206100-c1495de14c53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJvdXRpcXVlJTIwaG90ZWx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
		describe: [
			{
				id: 0,
				title: 'Rental unit',
				desc: 'A rented place within a multi-unit-residential building or complex.',
			},
		],
	},
];

const hostPlaceSpaceInfoData = [
	{ id: 0, text: 'An entire place' },
	{ id: 1, text: 'A private room' },
	{ id: 2, text: 'A shared room' },
];

const hostPlaceAmenitiesData = {
	standoutAmenitiesList: [
		{
			id: 0,
			text: 'Pool',
			iconCode: 'jlpgasyu',
		},
		{ id: 1, text: 'Hot tub', iconCode: 'wfroncyf' },
		{ id: 2, text: 'BBQ grill', iconCode: 'coqbeapw' },
		{
			id: 3,
			text: 'Fire pit',
			icon: firepit,
		},
		{ id: 4, text: 'Pool table', icon: poolball },
		{ id: 5, text: 'Indoor fireplace', icon: indoorFirebase },
		{ id: 6, text: 'Outdoor dining area', icon: dine },
		{ id: 7, text: 'Exercise equipment', iconCode: 'ouvpilty' },
	],

	guestFavoritesAmenitiesList: [
		{ id: 8, text: 'Wifi', icon: <FaSwimmingPool /> },
		{ id: 9, text: 'TV', icon: <FaSwimmingPool /> },
		{ id: 10, text: 'Kitchen', icon: <FaSwimmingPool /> },
		{ id: 11, text: 'Washer', icon: <FaSwimmingPool /> },
		{ id: 12, text: 'Free parking on premises', icon: <FaSwimmingPool /> },
		{ id: 13, text: 'Paid parking on premises', icon: <FaSwimmingPool /> },
		{ id: 14, text: 'Air conditioning', icon: <FaSwimmingPool /> },
		{ id: 15, text: 'Dedicated workspace', icon: <FaSwimmingPool /> },
		{ id: 16, text: 'Outdoor shower', icon: <FaSwimmingPool /> },
	],

	guestSafetyAmenitiesList: [
		{ id: 17, text: 'Smoke alarm', icon: <FaSwimmingPool /> },
		{ id: 18, text: 'First aid kit', icon: <FaSwimmingPool /> },
		{ id: 19, text: 'Carbon monoxide alarm', icon: <FaSwimmingPool /> },
		{ id: 20, text: 'Fire extinguisher', icon: <FaSwimmingPool /> },
	],
};

const getAmenities = (amenityIds) => {
	let amenities = [];

	const standoutAmenities = amenityIds.standoutAmenitiesList;
	const guestFavoritesAmenities = amenityIds.guestFavoritesAmenitiesList;
	const guestSafetyAmenities = amenityIds.guestSafetyAmenitiesList;

	const newStandout = standoutAmenities.length
		? hostPlaceAmenitiesData.standoutAmenitiesList.filter((item) =>
				standoutAmenities.includes(item.id)
		  )
		: [];

	const newFavorites = guestFavoritesAmenities.length
		? hostPlaceAmenitiesData.guestFavoritesAmenitiesList.filter((item) =>
				guestFavoritesAmenities.includes(item.id)
		  )
		: [];

	const newSafety = guestSafetyAmenities.length
		? hostPlaceAmenitiesData.guestSafetyAmenitiesList.filter((item) =>
				guestSafetyAmenities.includes(item.id)
		  )
		: [];

	amenities = [...newStandout, ...newFavorites, ...newSafety];

	return amenities;
};

export {
	hostPlaceCategoryData,
	hostPlaceSpaceInfoData,
	hostPlaceAmenitiesData,
	getAmenities,
};
