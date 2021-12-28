import React from 'react';
import Header from '../../../shared/Header/Header';
import SearchResultItem from '../SearchResultItem/SearchResultItem';
import SearchResultsMap from '../SearchResultsMap/SearchResultsMap';

const SearchResultsHome = () => {
	return (
		<div className='h-screen'>
			<Header />
			<div className='grid grid-cols-2 border'>
				<div className='p-10 border'>
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
					<h2 className='py-5 text-2xl'>Apertment Details</h2>
					<SearchResultItem />
					<SearchResultItem />
					<SearchResultItem />
				</div>
				<div className=''>
					<SearchResultsMap />
				</div>
			</div>
		</div>
	);
};

export default SearchResultsHome;
