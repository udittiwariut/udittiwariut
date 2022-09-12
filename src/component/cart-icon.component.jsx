import { useContext } from "react";
import { ReactComponent as CartIcon } from "./../assets/shopping-bag.svg";
import { cartContext } from "../context/cartDropDownContext";
import "./cart-icon.scss";

const CartLogo = () => {
	const { isCartOpen, setisCartOpen, cartCount } = useContext(cartContext);
	return (
		<div
			onClick={() => setisCartOpen(!isCartOpen)}
			className="cart-icon-container"
		>
			<CartIcon className="shopping-icon" />
			<span className="item-count ">{cartCount}</span>
		</div>
	);
};

export default CartLogo;
