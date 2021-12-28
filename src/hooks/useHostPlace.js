import { useState } from 'react';
import useAxios from '../hooks/useAxios';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFirebase from './useFirebase.js';

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
	const [isImgUploadingDone, setIsImgUploadingDone] = useState(false);
	const [isPlaceUploading, setIsPlaceUploading] = useState(false);
	const { user } = useFirebase();
	const { client } = useAxios();
	const navigate = useNavigate();

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

	const handlePlaceReset = () => {
		setPlaceType(null);
		setPlaceDesc(null);
		setPlaceSpaceInfo(null);
		setPlaceGuestCount(initialGuestCount);
		setPlaceAmenityList(initialAmenityList);
		setPlaceImageFiles([]);
		setPlaceImageList([]);
		setPlaceTitle('');
		setPlaceDescription('');
		setPlacePrice(initialPrice);
		setHostPlace({});
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
			host: {
				host_name: user.displayName,
				host_avatar: user.photoURL,
				host_id: user.uid,
			},
			placeReviews: [],
		};
		setHostPlace(newHostPlace);
		navigate('/host/review');
	};

	const handlePlaceStore = () => {
		setIsPlaceUploading(true);
		let length = 0;

		placeImageFiles.forEach((img) => {
			let body = new FormData();
			body.set('key', 'd845bc3ffcdbf53e0ef9ccaa71aab9ee');
			body.append('image', img);
			axios({
				method: 'post',
				url: 'https://api.imgbb.com/1/upload',
				data: body,
			})
				.then((resp) => {
					setPlaceImageList((prevList) => {
						if (prevList.length) {
							return [...prevList, resp.data.data.display_url];
						}
						return [resp.data.data.display_url];
					});
					length++;
				})
				.catch((error) => {
					console.log(error);
				})
				.finally(() => {
					if (placeImageFiles.length === length) {
						setIsImgUploadingDone(true);
					}
				});
		});
	};

	const handlePlaceObjectStore = () => {
		console.log('called place object store');
		const newHostPlace = {
			...hostPlace,
			placeImageList,
		};

		client
			.post('/place', newHostPlace)
			.then((res) => {
				console.log(res.data);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setIsImgUploadingDone(false);
				setIsPlaceUploading(false);
				navigate('/');
				handlePlaceReset();
			});
	};

	useEffect(() => {
		if (isImgUploadingDone) {
			handlePlaceObjectStore();
		}
	}, [isImgUploadingDone]);

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
		isPlaceUploading,
	};
};

export default useHostPlace;
