import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="main-container text-center">
				<section className="hero-section">
					<div className="r-side">
						<div className="text-content">
							<h2 className="hero-heading font-bold text-[1.7rem] ">
								Rent a <span className="text-meta">Place</span> away from <span className="text-meta">Home</span> in the{" "}
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
						<img src="./src/assets/group 4028.svg" alt="" className=" w-[80%] mx-auto" />
					</div>
				</section>
				<div className="clients overflow-hidden  bg-meta">
					<div className="images py-2 flex gap-[4rem]  translate-x-full">
						<img src="./src/assets/group 59537.svg" alt="" className="w-[50%]" />
						<img src="./src/assets/group 4040.svg" alt="" className="w-[50%]" />
						<img src="./src/assets/frame 4041.svg" alt="" className="w-[50%]" />
					</div>
				</div>
				<section className="places-container">
					<h2 className="places-heading font-bold text-[1.5rem]">Inspiration for your next adventure</h2>
					<div className="places">

					</div>
 </section>
			</div>
		</div>
	);
}

export default App;
