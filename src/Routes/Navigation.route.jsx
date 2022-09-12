import { Fragment, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { ReactComponent as Logo } from "./../assets/logo.svg";
import DropDownMenu from "../component/cart-dropdown.component";
import CartLogo from "./../component/cart-icon.component";
import { singOutUser } from "../utlis/firebase/utls-firebase";
import { cartContext } from "../context/cartDropDownContext";
import "./Navigation.style.scss";

const Navigation = () => {
	const { curretUser, setCurrentUser } = useContext(UserContext);
	const singoutHandler = async () => {
		const res = await singOutUser();
		setCurrentUser(res);
	};
	const { isCartOpen } = useContext(cartContext);

	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to={"/"}>
					<Logo className="logo"></Logo>
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to={"shop"}>
						SHOP
					</Link>
					{curretUser ? (
						<span className="nav-link" onClick={singoutHandler}>
							Sing-Out
						</span>
					) : (
						<Link className="nav-link" to={"sing-in"}>
							Sing In
						</Link>
					)}
					<CartLogo />
				</div>
				{isCartOpen && <DropDownMenu />}
				{/*this double && sing return truthy value and return the last one ,react componet are truthy value*/}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
