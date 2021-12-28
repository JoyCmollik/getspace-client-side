import { useState } from 'react';

const initialGuestCount = {
	guests: 5,
	beds: 1,
	bedrooms: 1,
	bathrooms: 1,
};

const initialAmenityList = {
	standoutAmenitiesList: [0, 1, 2, 3],
	guestFavoritesAmenitiesList: [],
	guestSafetyAmenitiesList: [],
};

const initialPrice = {
	priceType: '$',
	price: 45,
};

const useHostPlace = () => {
	const [placeType, setPlaceType] = useState(null);
	const [placeDesc, setPlaceDesc] = useState(null);
	const [placeSpaceInfo, setPlaceSpaceInfo] = useState(null);
	const [placeGuestCount, setPlaceGuestCount] = useState(initialGuestCount);
	const [placeAmenityList, setPlaceAmenityList] =
		useState(initialAmenityList);
	const [placeImageFiles, setPlaceImageFiles] = useState([]);
	const [placeImageList, setPlaceImageList] = useState([]);
	const [placeTitle, setPlaceTitle] = useState('');
	const [placeDescription, setPlaceDescription] = useState('');
	const [placePrice, setPlacePrice] = useState(initialPrice);
	const [hostPlace, setHostPlace] = useState({});

	console.log(placeImageFiles);

	const handlePlaceType = (selectedPlaceType) => {
		if (selectedPlaceType.id === placeType?.id) return;

		setPlaceType(() => selectedPlaceType);
	};

	const handlePlaceDesc = (selectedPlaceDesc) => {
		if (selectedPlaceDesc.id === placeDesc?.id) return;

		setPlaceDesc(() => selectedPlaceDesc);
	};

	const handlePlaceSpaceInfo = (selectedPlaceSpaceInfo) => {
		if (selectedPlaceSpaceInfo.id === placeSpaceInfo?.id) return;

		setPlaceSpaceInfo(() => selectedPlaceSpaceInfo);
	};

	const handlePlaceGuestCount = (key, operation) => {
		setPlaceGuestCount((prevGuestCount) => {
			let keyCount = prevGuestCount[key];

			if (operation === 'increase') keyCount++;
			else keyCount--;

			const newGuestCount = { ...prevGuestCount };
			newGuestCount[key] = keyCount;

			return newGuestCount;
		});
	};

	const handlePlaceAmenityList = (id, key) => {
		setPlaceAmenityList((prevAmenityTotalList) => {
			let newAmenityList = [];
			let newAmenityTotalList = { ...prevAmenityTotalList };
			const prevAmenityList = prevAmenityTotalList[key];

			// checking if the id is already in the list
			if (prevAmenityList.includes(id)) {
				newAmenityList = prevAmenityList.filter(
					(amenity_id) => amenity_id !== id
				);
			} else {
				newAmenityList = [...prevAmenityList, id];
			}

			newAmenityTotalList[key] = newAmenityList;

			return newAmenityTotalList;
		});
	};

	const handlePlacePrice = (operation) => {
		setPlacePrice((prevPrice) => {
			const currPrice = Number(prevPrice.price);
			if (operation === 'increase') {
				return { ...prevPrice, price: currPrice + 1 };
			}

			return { ...prevPrice, price: currPrice - 1 };
		});
	};

	const handlePlaceObject = (navigate) => {
		const newHostPlace = {
			placeType,
			placeDesc,
			placeSpaceInfo,
			placeGuestCount,
			placeAmenityList,
			placeTitle,
			placeDescription,
			placePrice,
		};
		setHostPlace(newHostPlace);
		console.log(newHostPlace);
		navigate('/host/review');
	};

	const handlePlaceStore = () => {};

	return {
		placeType,
		handlePlaceType,
		placeDesc,
		handlePlaceDesc,
		placeSpaceInfo,
		handlePlaceSpaceInfo,
		placeGuestCount,
		handlePlaceGuestCount,
		placeAmenityList,
		handlePlaceAmenityList,
		placeImageFiles,
		setPlaceImageFiles,
		placeTitle,
		setPlaceTitle,
		placeDescription,
		setPlaceDescription,
		placePrice,
		setPlacePrice,
		handlePlacePrice,
		handlePlaceObject,
		hostPlace,
		handlePlaceStore,
	};
};

export default useHostPlace;
