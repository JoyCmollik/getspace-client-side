import React from 'react';
import { BiAperture } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsTwitter, BsLinkedin, BsYoutube } from 'react-icons/bs';

const firstColumnLinks = [
	{ href: '#', text: 'GetSpace Skills' },
	{ href: '#', text: 'GetSpace Flow' },
	{ href: '#', text: 'Government' },
	{ href: '#', text: 'Gift of getspace' },
	{ href: '#', text: 'View Pricing' },
	{ href: '#', text: 'Contact Safes' },
	{ href: '#', text: 'Skill up for free' },
];
const secondColumnLinks = [
	{ href: '#', text: 'Browse library' },
	{ href: '#', text: 'Role IQ' },
	{ href: '#', text: 'Skill IQ' },
	{ href: '#', text: 'Iris' },
	{ href: '#', text: 'Authors' },
	{ href: '#', text: 'Professional Services' },
	{ href: '#', text: 'Technology Index' },
];
const thirdColumnLinks = [
	{ href: '#', text: 'About us' },
	{ href: '#', text: 'Customer stories' },
	{ href: '#', text: 'Careers' },
	{ href: '#', text: 'Blog' },
	{ href: '#', text: 'Newsroom' },
	{ href: '#', text: 'Resource center' },
	{ href: '#', text: 'Guides' },
];
const fourthColumnLinks = [
	{ href: '#', text: 'Download Getspace' },
	{ href: '#', text: 'Events' },
	{ href: '#', text: 'Teach' },
	{ href: '#', text: 'Partners' },
	{ href: '#', text: 'Affiliate Partners' },
	{ href: '#', text: 'Getspace.org' },
	{ href: '#', text: 'Subscribe' },
];
const fifthColumnLinks = [
	{ href: '#', text: 'Contact' },
	{ href: '#', text: 'Help center' },
	{ href: '#', text: 'IP whitelist' },
	{ href: '#', text: 'Sitemap' },
];

const Footer = () => {
	return (
		<div className='py-20 bg-darklight text-gray-200'>
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2'>
					<div className='mb-10'>
						<h4 className='text-sm font-bold'>
							SOLUTIONS
							<br />
							<br />
						</h4>
						<ul className='text-gray-500'>
							{firstColumnLinks.map(({ href, text }, linkIdx) => (
								<li>
									<a
										href={href}
										className='pb-4 hover:text-white'
									>
										{text}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className='mb-10 pr-10'>
						<h4 className='text-sm font-bold'>
							PLATFORM
							<br />
							<br />
						</h4>
						<ul className='text-gray-500'>
							{secondColumnLinks.map(
								({ href, text }, linkIdx) => (
									<li>
										<a
											href={href}
											className='pb-4 hover:text-white'
										>
											{text}
										</a>
									</li>
								)
							)}
						</ul>
					</div>

					<div className='mb-10 pr-10'>
						<h4 className='text-sm font-bold'>
							COMPANY
							<br />
							<br />
						</h4>
						<ul className='text-gray-500'>
							{thirdColumnLinks.map(({ href, text }, linkIdx) => (
								<li>
									<a
										href={href}
										className='pb-4 hover:text-white'
									>
										{text}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className='mb-10 pr-10'>
						<h4 className='text-sm font-bold'>
							RESOURCES
							<br />
							<br />
						</h4>
						<ul className='text-gray-500'>
							{fourthColumnLinks.map(
								({ href, text }, linkIdx) => (
									<li>
										<a
											href={href}
											className='pb-4 hover:text-white'
										>
											{text}
										</a>
									</li>
								)
							)}
						</ul>
					</div>

					<div className='mb-10 pr-10'>
						<h4 className='text-sm font-bold'>
							SUPPORT
							<br />
							<br />
						</h4>
						<ul className='text-gray-500'>
							{fifthColumnLinks.map(({ href, text }, linkIdx) => (
								<li>
									<a
										href={href}
										className='pb-4 hover:text-white'
									>
										{text}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<hr></hr>

				<div className='pt-8'>
					<div className='flex'>
						<i className='inline pr-2.5'>
							<BiAperture />
						</i>

						<h4 className='inline pr-8'>
							<a href='/#' className='pb-4 hover:text-white'>
								English
							</a>
						</h4>
					</div>
				</div>
				<br />
				<hr></hr>
				<div className='pt-11'>
					<div className='flex'>
						<div>
							<p className=' text-gray-500'>
								Copyright © 2004 - 2021 GETSPACE LLC. All rights
								reserved
							</p>
						</div>

						<div className='pl-11 flex'>
							<div className='mb-10 pr-10'>
								<h4 className='text-sm font-bold'>
									<a
										href='/#'
										className='pb-4 hover:text-yellow-600'
									>
										Terms of Use
									</a>
								</h4>
							</div>
							<div className='mb-10 pr-10'>
								<h4 className='text-sm font-bold'>
									<a
										href='/#'
										className='pb-4 hover:text-yellow-600'
									>
										Privacy Policy
									</a>
								</h4>
							</div>

							<i className='inline pr-2.5'>
								<a
									href='/#'
									className='pb-4 hover:text-yellow-600'
								>
									<FaFacebookF />
								</a>
							</i>
							<i className='inline pr-2.5'>
								<a
									href='/#'
									className='pb-4 hover:text-yellow-600'
								>
									<BsInstagram />
								</a>
							</i>
							<i className='inline pr-2.5'>
								<a
									href='/#'
									className='pb-4 hover:text-yellow-600'
								>
									<BsTwitter />
								</a>
							</i>
							<i className='inline pr-2.5'>
								<a
									href='/#'
									className='pb-4 hover:text-yellow-600'
								>
									<BsLinkedin />
								</a>
							</i>
							<i className='inline pr-2.5'>
								<a
									href='/#'
									className='pb-4 hover:text-yellow-600'
								>
									<BsYoutube />
								</a>
							</i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
