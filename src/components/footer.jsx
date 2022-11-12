import React from "react";

const footer = () => {
	return (
		<div className="bg-black text-white py-9 px-5">
			<a href="/" className="footer-logo mb-7 block">
				<img src="./group.svg" alt="" className="mx-auto" />
			</a>
			<div className="footer-social-links-w-copyright hidden">
				<div className="footer-social-links">
					<a href="" className="footer-social-link">
						<img src="./facebook-263-721950.svg" alt="" className="" />
					</a>
					<a href="" className="footer-social-link">
						<img src="./instagram-216-721958.svg" alt="" className="" />
					</a>
					<a href="" className="footer-social-link">
						<img src="./twitter-241-721979.svg" alt="" className="" />
					</a>
				</div>
				<div className="footer-copyright text-[#F7F7F7]">
					<p>&copy; 2022 Metabnb</p>
				</div>
			</div>
			<div className="footer-links flex flex-wrap justify-between mb-7">
				<div className="footer-links__community flex flex-col text-[0.77rem]">
					<h2 className="footer-links__community-heading text-base">Community</h2>
					<a href="" className="footer-links__community-link text-[#F1F3F9]">
						NFT
					</a>
					<a href="" className="footer-links__community-link text-[#F1F3F9]">
						Tokens
					</a>
					<a href="" className="footer-links__community-link text-[#F1F3F9]">
						Landlords
					</a>
					<a href="" className="footer-links__community-link text-[#F1F3F9]">
						Discord
					</a>
				</div>
				<div className="footer-links__places flex flex-col text-[0.77rem]">
					<h2 className="footer-links__places-heading text-base">Places</h2>
					<a href="" className="footer-links__places-link text-[#F1F3F9]">
						Castle
					</a>
					<a href="" className="footer-links__places-link text-[#F1F3F9]">
						Farms
					</a>
					<a href="" className="footer-links__places-link text-[#F1F3F9]">
						Beach
					</a>
					<a href="" className="footer-links__places-link text-[#F1F3F9]">
						Learn more
					</a>
				</div>
				<div className="footer-links__about-us flex flex-col text-[0.77rem]">
					<h2 className="footer-links__about-us-heading text-base">About-us</h2>
					<a href="" className="footer-links__about-us-link text-[#F1F3F9]">
						Road map
					</a>
					<a href="" className="footer-links__about-us-link text-[#F1F3F9]">
						Creators
					</a>
					<a href="" className="footer-links__about-us-link text-[#F1F3F9]">
						Careers
					</a>
					<a href="" className="footer-links__about-us-link text-[#F1F3F9]">
						Contact us
					</a>
				</div>
				
			</div><div className="footer-social-links__mobile flex flex-col gap-3 mt-3">
					<div className="footer-social-links flex justify-center gap-5">
						<img src="./facebook-263-721950.svg" alt="" className="" />
						<img src="./instagram-216-721958.svg" alt="" className="" />
						<img src="./twitter-241-721979.svg" alt="" className="" />
					</div>
					<div className="footer-copyright">
						<p>&copy; 2022 Metabnb</p>
					</div>
				</div>
		</div>
	);
};

export default footer;
