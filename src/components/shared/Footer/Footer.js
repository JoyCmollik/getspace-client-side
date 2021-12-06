import React from 'react';
import { BiAperture } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsLinkedin, BsYoutube} from "react-icons/bs";

const firstColumnLinks = [
	{href:'#', text: 'getSpace Skills'},
	{href:'#', text: 'getSpace Flow'},
	{href:'#', text: 'Government'},
	{href:'#', text: 'Gift of getspace'},
	{href:'#', text: 'View Pricing'},
	{href:'#', text: 'Contact Safes'},
	{href:'#', text: 'Skill up for free'},
];



const Footer = () => {
	return (
		<div className="py-20 bg-gray-900 text-gray-200">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
				
				<div className="mb-10">
						<h4 className="text-sm font-bold">SOLUTIONS<br/><br/></h4>
						<ul className="text-gray-500">
							{
								firstColumnLinks.map(({href, text}, linkIdx) => <li>
								<a href={href} className="pb-4 hover:text-white">{text}</a>
							</li>)
							}
						</ul>
					</div>

					<div className="mb-10 pr-10">
						<h4 className="text-sm font-bold">PLATFORM<br/><br/></h4>
						<ul className="text-gray-500">
							<li><a href="/#" className="pb-4 hover:text-white">Browse library</a></li>
							<li><a href="/#" className="pb-4 hover:text-white">Role IQ</a></li>
							<li><a href="/#" className="pb-4 hover:text-white">Skill IQ</a></li>
							<li><a href="/#" className="pb-4 hover:text-white">Iris<br/></a></li>
							<li><a href="/#" className="pb-4 hover:text-white">Authors</a></li>
							<li><a href="/#" className="pb-4 hover:text-white">Professional Services</a></li>
							<li><a href="/#" className="pb-4 hover:text-white">Technology Index<br/></a></li>
						</ul>
					</div>

					<div className="mb-10 pr-10">
						<h4 className="text-sm font-bold">COMPANY<br/><br/></h4>
						<ul className="text-gray-500">
							<li><a href="/#" className="pb-4 hover:text-white">About us</a></li>
							<li><a href="/#" className="pb-4 hover:text-white">Customer stories</a></li>
							<li><a href="/#" className="pb-4 hover:text-white">Careers</a></li>
							<li><a href="/#" className="pb-4 hover:text-white">Blog<br/></a></li>
							<li><a href="/#" className="pb-4 hover:text-white">Newsroom</a></li>
							<li><a href="/#" className="pb-4 hover:text-white">Resource center</a></li>
							<li><a href="/#" className="pb-4 hover:text-white">Guides<br/></a></li>
						</ul>
					</div>

					<div className="mb-10 pr-10">
						<h4 className="text-sm font-bold">RESOURCES<br/><br/></h4>
						<ul className="text-gray-500">
							<li><a href="/#" className="pb-4 hover:text-white">Download Pluralsight</a></li>
							<li><a href="/#" className="pb-4 hover:text-white">Events</a></li>
							<li><a href="/#" className="pb-4 hover:text-white">Teach</a></li>
							<li><a href="/#" className="pb-4 hover:text-white">Partners<br/></a></li>
							<li><a href="/#" className="pb-4 hover:text-white">Affiliate Partners</a></li>
							<li><a href="/#" className="pb-4 hover:text-white">PluralsightOne.org</a></li>
							<li><a href="/#" className="pb-4 hover:text-white">Subscribe<br/></a></li>
						</ul>
					</div>

					<div className="mb-10 pr-10">
						<h4 className="text-sm font-bold">SUPPORT<br/><br/></h4>
						<ul className="text-gray-500">
							<li><a href="/#" className="pb-4 hover:text-white">Contact</a></li>
							<li><a href="/#" className="pb-4 hover:text-white">Help center</a></li>
							<li><a href="/#" className="pb-4 hover:text-white">IP whitelist</a></li>
							<li><a href="/#" className="pb-4 hover:text-white">Sitemap</a><br/></li>
							
						</ul>
					</div>
				 </div>	
				 <hr></hr>
				 
					<div className="pt-8">
						<div className="flex">
						<i className="inline pr-2.5"><BiAperture /></i>
						<h4 className="inline text-gray-400 pr-8"><a href="/#" className="pb-4 hover:text-white">Deutsch</a></h4>
						<h4 className="inline pr-8"><a href="/#" className="pb-4 hover:text-white">English</a></h4>
						<h4 className="inline text-gray-400 pr-8"><a href="/#" className="pb-4 hover:text-white">French</a></h4>
					</div> 
					
			     </div>
				 <br/>
				<hr></hr>
				 <div className="pt-11">
						<div className="flex">
						<div >
						<p className=" text-gray-500">Copyright © 2004 - 2021 Pluralsight LLC. All rights reserved</p>
						</div>
						
						<div className="pl-11 flex">
						<div className="mb-10 pr-10">
							<h4 className="text-sm font-bold"><a href="/#" className="pb-4 hover:text-yellow-600">
							Terms of Use</a></h4>
							</div>
						<div className="mb-10 pr-10">
							<h4 className="text-sm font-bold">
								<a href="/#" className="pb-4 hover:text-yellow-600">
								Privacy Policy</a>
							</h4>
						</div>
						<div className="mb-10 pr-10">
							<h4 className="text-sm font-bold">
								<a href="/#" className="pb-4 hover:text-yellow-600">Modern Slavery Act Transparency Statement
								</a>
							</h4>
						</div>
						
						<i className="inline pr-2.5"><a href="/#" className="pb-4 hover:text-yellow-600"><FaFacebookF/></a></i>
						<i className="inline pr-2.5"><a href="/#" className="pb-4 hover:text-yellow-600"><BsInstagram/></a></i>
						<i className="inline pr-2.5"><a href="/#" className="pb-4 hover:text-yellow-600"><BsTwitter/></a></i>
						<i className="inline pr-2.5"><a href="/#" className="pb-4 hover:text-yellow-600"><BsLinkedin/></a></i>
						<i className="inline pr-2.5"><a href="/#" className="pb-4 hover:text-yellow-600"><BsYoutube/></a></i>
						</div>
						</div>
					</div>	
			</div>
			
		</div>
	);
};

export default Footer;
