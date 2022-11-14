import React from "react";
import Logo from "/images/logo-gradient.svg";
import { Link } from "react-router-dom";
import Button from "../components/button";

const navbar = () => {
	const links = [
		{
			path: "/",
			title: "Home",
		},
		{
			path: "/places",
			title: "Place to stay",
		},
		{
			path: "",
			title: "NFTs",
		},
		{
			path: "",
			title: "Community",
		},
	];

	const [open, setOpen] = React.useState(false);

	return (
		<>
			<nav className="navbar-container fixed z-50 top-0 md:py-2 lg:py-3 bg-white w-full md:flex md:mb-[7.5rem]">
				<div className="desktop-nav md:flex md:justify-between md:items-stretch md:w-[90%] md:mx-auto lg:w-[87%] xl:w-[80%] md:gap-5">
					<div className="logo flex justify-between items-center py-3 md:flex-1 px-4 md:px-0 md:py-0 lg:w-[20%] xl:w-[35%]">
						<Link to="/" className="md:p-0">
							<img src={Logo} alt="" className="w-[60%] md:w-[70%] lg:w-[75%]" />
						</Link>

						<ul className="hidden lg:flex lg:items-center gap-10 h-full lg:w-[50%] xl:w-[40%] lg:flex-1 xl:flex-none">
							{links.map((link, index) => (
								<li key={index} className="nav-item flex items-center h-full">
									<Link className="p-2 hover:font-bold duration-800" to={link.path}>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
						<div className="flex items-center gap-5 ">
							<div className="nav-cta hidden md:flex">
								<Button />
							</div>
							<div
								className="toggle text-3xl mt-[0.6rem] md:text-[2.7rem] md:mt-[0.24rem] lg:hidden"
								onClick={() => setOpen((prevState) => !prevState)}
							>
								<ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
							</div>
						</div>
					</div>
				</div>
			</nav>
			{/* Mobile Nav */}
			<div
				className={`mobile-nav flex flex-col gap-6 bg-white absolute z-40 w-full h-screen pt-0 pl-6 duration-500 ${
					open ? "left-0" : "left-[-100%]"
				} lg:hidden md:pl-[3.5rem]`}
			>
				<ul className="space-y-3">
					{links.map((link, index) => (
						<li key={index} className="nav-item">
							<Link className="inline-block w-[50%] py-2" to={link.path}>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
				<div className="nav-cta">
					<Button />
				</div>
			</div>
		</>
	);
};

export default navbar;
