import React from 'react'
import Place from "./place";
import imagesUrls from "../images.jsx";

const Home = () => {
    const places = imagesUrls.map((item) => {
			return (
				<Place
					key={item.id}
					img={item.img}
					location="Desert king"
					price="1MBT per night"
					distance="2345km away"
					availability="available for 2weeks stay"
				/>
			);
		});
  return (
    <div className="main-container text-center md:text-left">
				<section className="hero-section flex flex-col gap-7 pb-7 md:flex-row md:items-center md:justify-between md:w-[90%] md:mx-auto">
					<div className="r-side flex flex-col gap-4 md:w-[50%]">
						<div className="text-content px-4 md:px-0">
							<h2 className="hero-heading font-bold text-[1.7rem] leading-[1.06] mb-4 ">
								Rent a <span className="text-meta">Place</span> away from <span className="text-meta">Home</span> in the <span className="text-meta">Metaverse</span>
							</h2>
							<p className="text-base">
								We provide you access to luxury and affordable houses in the Metaverse, get a chance to turn your
								imagination to reality at your comfort zone.
							</p>
						</div>
						<div className="input-field flex justify-center md:justify-start">
							<input
								type="text"
								className="border-[#A3A3A3] border-[1px] p-[0.4rem] px-[0.5rem] border-solid w-[60%] rounded-tl-[4px] rounded-bl-[4px]"
								placeholder="Search for location"
							/>
							<button className="bg-meta text-white py-[0.4rem] w-[35%] rounded-tr-[4px] rounded-br-[4px]">
								Search
							</button>
						</div>
					</div>
					<div className="l-side md:w-[40%]">
						<img src="./images/hero-img.svg" alt="" className=" w-[80%] mx-auto md:mx-0 md:w-[fit-content]" />
					</div>
				</section>
				<div className="clients overflow-hidden bg-meta">
					<div className="images py-2 flex gap-[4rem] translate-x-full md:animate-none md:translate-x-0 md:justify-between md:px-16">
						<img src="./images/brand-mbtoken.svg" alt="" className="w-[36%] md:w-[22%]" />
						<img src="./images/brand-metamask.svg" alt="" className="w-[36%] md:w-[22%]" />
						<img src="./images/brand-opensea.svg" alt="" className="w-[36%] md:w-[22%]" />
					</div>
				</div>
				<section className="places-container py-12 md:w-[90%] md:mx-auto">
					<h2 className="places-heading font-bold text-[1.5rem] mb-5 md:text-center md:text-[2rem]">Inspiration for your next adventure</h2>
					<div className="places px-3 flex flex-col gap-5 md:px-0 md:flex-row md:flex-wrap md:justify-between">{places}</div>
				</section>
				<section className="about-metaverse bg-meta p-10 text-white flex flex-col gap-10 md:flex-row md:justify-between md:items-center">
					<div className="r-side md:w-[50%]">
						<div className="text-content space-y-7 text-[0.875rem]">
							<h2 className="about-metaverse__heading text-[1.85rem]">Metabnb NFTs</h2>
							<p className="about-metaverse__copy">
								Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as
								NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
							</p>
							<a
								href="/nfts"
								className="about-metaverse__link text-meta bg-white py-2 px-4 rounded-[8px] inline-block "
							>
								Learn more
							</a>
						</div>
					</div>
					<div className="l-side md:w-[48%]">
						<img src="./images/about-img.svg" alt="" className="about-metaverse__img md:w-[fit-content]" />
					</div>
          </section>
          </div>
  )
}

export default Home