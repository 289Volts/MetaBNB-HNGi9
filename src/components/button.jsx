import React from "react";
import { Link } from "react-router-dom";


const button = ({ setIsOpen }) => {
	return (
		<div className="">
			<Link to="/connect-allet">
				<button className="py-3 px-6 bg-buttonColor text-white rounded-[10px]">
					Connect wallet
				</button>
			</Link>
		</div>
	);
};

export default button;
