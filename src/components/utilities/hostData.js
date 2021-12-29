import { FaSwimmingPool } from 'react-icons/fa';
import firepit from '../../images/icons/fire-pit.svg';
import poolball from '../../images/icons/pool-ball.svg';
import indoorFirebase from '../../images/icons/indoor-firebase.svg';
import dine from '../../images/icons/dine.svg';
import washer from '../../images/icons/washer.svg';

import freepark from '../../images/icons/freepark.svg';
import paidpark from '../../images/icons/paidpark.svg';

import ac from '../../images/icons/ac.svg';
import fire from '../../images/icons/fire.svg';
import firstaid from '../../images/icons/firstaid.svg';
import office from '../../images/icons/office.svg';
import shower from '../../images/icons/outdoorshower.svg';
import smoke from '../../images/icons/smoke.svg';
import kitchen from '../../images/icons/kitchen.png';

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
				title: 'Residential Home',
				desc: 'A home that may stand-alone or have shared walls.',
			},
			{
				id: 1,
				title: 'Cabin',
				desc: 'A house made with natural materials like wood and built in a natural setting.',
			},
			{
				id: 2,
				title: 'Villa',
				desc: 'A luxury home that may have indoor outdoor spaces, gardens and pools.',
			},
			{
				id: 3,
				title: 'Townhouse',
				desc: 'A row and terrace house that may have shared walls and indoor spaces.',
			},
			{
				id: 4,
				title: 'Cottage',
				desc: 'A cozy house built in a rural area or near a lake or beach.',
			},
			{
				id: 5,
				title: 'Bungalow',
				desc: 'A single-level house with a wide front porch and a sloping roof.',
			},
			{
				id: 6,
				title: 'Earth House',
				desc: 'A home built in the ground or made from materials like rammed earth.',
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
				title: 'Guesthouse',
				desc: 'A carriage house or coach house that shares land with a main building.',
			},
			{
				id: 1,
				title: 'Guest suite',
				desc: 'A space with a private entrance inside of or attached to a larger structure.',
			},
			{
				id: 2,
				title: 'Firm stay',
				desc: 'A rural stay where guests may spend time with animals, hiking, or crafting.',
			},
			{
				id: 3,
				title: 'Vacation home',
				desc: 'A furnished rental property that includes a kitchen and bathroom and may offer some guest services, like a reception desk.',
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
				title: 'Barn',
				desc: 'A converted space in a building used for grain, livestock, or farming.',
			},
			{
				id: 1,
				title: 'Boat',
				desc: 'A boat, sailboat, or yacht moored during guest visits. Not a houseboat.',
			},
			{
				id: 2,
				title: 'Bus',
				desc: 'A converted multi-passenger vehicle with a creativety remagined interior.',
			},
			{
				id: 3,
				title: 'Camper/RV',
				desc: 'A motor home or camping trailer thats half-home and half-vehicle.',
			},
			{
				id: 4,
				title: 'Treehouse',
				desc: 'A place to stay built into the trunk or branches of a tree.',
			},
			{
				id: 5,
				title: 'Campsite',
				desc: 'An area of land where guests can set up a tent, yurt, RV, or tiny house.',
			},
			{
				id: 6,
				title: 'Cave',
				desc: 'A natural underground formation in a hillside or cliff.',
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
				title: 'Bed and Breakfast',
				desc: 'A hospitality business offereing guests breakfast with a host on site.',
			},
			{
				id: 1,
				title: 'Nature lodge',
				desc: 'A business offering stays near natural setting like forest mountaines.',
			},
			{
				id: 2,
				title: 'Farm stay',
				desc: 'A rural stay where guests may spend time with animals, hiking, or crafting.',
			},
			{
				id: 3,
				title: 'Minsu',
				desc: 'A hospitality business offering guests private rooms in Taiwan. ',
			},
			{
				id: 4,
				title: 'Casa particular',
				desc: 'A private room in a home that feels like a bed and breakfast in Cuba',
			},
			{
				id: 5,
				title: 'Ryokan',
				desc: 'A small iin offering guests in a uniqe cultural experience in Japan. ',
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
				title: 'Hotel',
				desc: 'A business ofering private rooms, suites, or unique stayes for guests.',
			},
			{
				id: 1,
				title: 'Hostel',
				desc: 'A hospitality business that rents bads in shared rooms and private rooms.',
			},
			{
				id: 2,
				title: 'Resort',
				desc: 'A hospitality business with more amenities and service than a hotel.',
			},
			{
				id: 3,
				title: 'Nature lodge',
				desc: 'A business offering stays near natural settings like forests or mountains.',
			},
			{
				id: 4,
				title: 'Aparthotel',
				desc: 'A place with hotel-like amenities and rooms that feel like apertments.',
			},
			{
				id: 5,
				title: 'Serviced apertment',
				desc: 'A place with hotel-like amenities serviced by a professional management company.',
			},
			{
				id: 6,
				title: 'Heritage hotel',
				desc: 'A historic building converted to quest accomodations in India.',
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
		{ id: 8, text: 'Wifi', iconCode: 'yzctygpq' },
		{ id: 9, text: 'TV', iconCode: 'isvvzjbf' },
		{ id: 10, text: 'Kitchen', icon: kitchen },
		{ id: 11, text: 'Washer', icon: washer },
		{ id: 12, text: 'Free parking on premises', icon: freepark },
		{ id: 13, text: 'Paid parking on premises', icon: paidpark },
		{ id: 14, text: 'Air conditioning', icon: ac },
		{ id: 15, text: 'Dedicated workspace', icon: office },
		{ id: 16, text: 'Outdoor shower', icon: shower },
	],

	guestSafetyAmenitiesList: [
		{ id: 17, text: 'Smoke alarm', icon: smoke },
		{ id: 18, text: 'First aid kit', icon: firstaid },
		{ id: 19, text: 'Carbon monoxide alarm', icon: smoke },
		{ id: 20, text: 'Fire extinguisher', icon: fire },
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
