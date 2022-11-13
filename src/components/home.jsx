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
    <div className="main-container text-center">
				<section className="hero-section flex flex-col md:flex-row md:items-center gap-7 pb-7">
					<div className="r-side flex flex-col gap-4 md:w-[60%]">
						<div className="text-content px-4">
							<h2 className="hero-heading font-bold text-[1.7rem] leading-[1.06] mb-4">
								Rent a <span className="text-meta">Place</span> away from <span className="text-meta">Home</span> in the
								<span className="text-meta">Metaverse</span>
							</h2>
							<p className="text-base">
								We provide you access to luxury and affordable houses in the Metaverse, get a chance to turn your
								imagination to reality at your comfort zone.
							</p>
						</div>
						<div className="input-field flex justify-center">
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
					<div className="l-side">
						<img src="./group 4028.svg" alt="" className=" w-[80%] mx-auto" />
					</div>
				</section>
				<div className="clients overflow-hidden  bg-meta">
					<div className="images py-2 flex gap-[4rem]  translate-x-full">
						<img src="./group 59537.svg" alt="" className="w-[36%]" />
						<img src="./group 4040.svg" alt="" className="w-[36%]" />
						<img src="./frame 4041.svg" alt="" className="w-[36%]" />
					</div>
				</div>
				<section className="places-container py-12 ">
					<h2 className="places-heading font-bold text-[1.5rem] mb-5">Inspiration for your next adventure</h2>
					<div className="places px-3 flex flex-col gap-5">{places}</div>
				</section>
				<section className="about-metaverse bg-meta p-10 text-white flex flex-col gap-10">
					<div className="r-side">
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
					<div className="l-side">
						<img src="./frame 59546.svg" alt="" className="about-metaverse__img" />
					</div>
          </section>
          </div>
  )
}

export default Home