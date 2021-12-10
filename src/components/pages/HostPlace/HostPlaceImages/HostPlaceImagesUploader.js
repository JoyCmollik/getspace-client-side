import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

const HostPlaceImagesUploader = ({ files, setFiles }) => {
	const { getRootProps, getInputProps, fileRejections } = useDropzone({
		maxFiles: 10,
		accept: 'image/*',
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});

	const errorMessage = fileRejections.length
		? fileRejections[0].errors[0].message
		: '';

	useEffect(
		() => () => {
			// Make sure to revoke the data uris to avoid memory leaks
			files.forEach((file) => URL.revokeObjectURL(file.preview));
		},
		[files]
	);

	return (
		<section className='p-4'>
			{!files.length ? (
				<div
					className='flex flex-col justify-center items-center rounded-lg border border-dashed border-para'
					style={{ minHeight: '40vh' }}
					{...getRootProps()}
				>
					<lord-icon
						src='https://cdn.lordicon.com/fgkmrslx.json'
						trigger='hover'
						colors='primary:#121331,secondary:#ff385c'
						style={{ width: 90, height: 90 }}
					/>
					<h4 className='text-xl font-medium'>
						Drag your photos here
					</h4>
					<p>Add at least five photos.</p>
					<p className='underline mt-4 tracking-wider cursor-pointer'>
						or simply click here to upload
					</p>
					<input {...getInputProps()} />
					<div
						className={`${
							errorMessage
								? 'p-4 bg-red-100 text-red-900 rounded-lg mt-4'
								: 'hidden'
						}`}
					>
						{errorMessage && <p>{errorMessage}</p>}
					</div>
				</div>
			) : (
				<div className=''>
					<div className='flex justify-between items-center py-4'>
						<h4 className='text-xl'>Want to upload again?</h4>
						<button
							onClick={() => setFiles([])}
							className='px-4 py-1 bg-red-100 text-red-400 rounded-lg'
						>
							Clear All
						</button>
					</div>
					<div className='grid grid-cols-2 gap-4'>
						{files.map((file) => (
							<div
								className='h-64 overflow-hidden rounded-lg'
								key={file.name}
							>
								<img
									className='object-cover h-full w-full rounded-lg'
									src={file.preview}
									alt='pics'
								/>
							</div>
						))}
					</div>
				</div>
			)}
		</section>
	);
};

export default HostPlaceImagesUploader;
