import React, { useEffect, useState } from 'react';
import useAxios from '../../../../hooks/useAxios';
import Header from '../../../shared/Header/Header';
import SearchResultItem from '../../SearchResults/SearchResultItem/SearchResultItem';
import loaderImag from '../../../../images/icons/loader.png';

const PlaceListHome = () => {
	const [placeList, setPlaceList] = useState(null);
	const { client } = useAxios();

	useEffect(() => {
		client
			.get('place')
			.then((response) => {
				setPlaceList(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className='container mx-auto min-h-screen'>
			<Header />

			<div className='space-y-8'>
				<form>
					<select name='cars' id='cars'>
						<option value='volvo'>Volvo</option>
						<option value='saab'>Saab</option>
						<option value='mercedes'>Mercedes</option>
						<option value='audi'>Audi</option>
					</select>
					<select name='cars' id='cars'>
						<option value='volvo'>Volvo</option>
						<option value='saab'>Saab</option>
						<option value='mercedes'>Mercedes</option>
						<option value='audi'>Audi</option>
					</select>
					<select name='cars' id='cars'>
						<option value='volvo'>Volvo</option>
						<option value='saab'>Saab</option>
						<option value='mercedes'>Mercedes</option>
						<option value='audi'>Audi</option>
					</select>
					<select name='cars' id='cars'>
						<option value='volvo'>Volvo</option>
						<option value='saab'>Saab</option>
						<option value='mercedes'>Mercedes</option>
						<option value='audi'>Audi</option>
					</select>
				</form>
				<div className='space-y-4'>
					<h2 className='py-5 text-2xl'>Apertment Details</h2>
					<div className='space-y-4'>
						{placeList ? (
							placeList.map((place) => (
								<SearchResultItem
									key={place._id}
									place={place}
								/>
							))
						) : (
							<div className='w-full h-full flex justify-center items-center'>
								<img src={loaderImag} alt='loading' />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlaceListHome;
