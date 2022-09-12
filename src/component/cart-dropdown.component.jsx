import { Link } from "react-router-dom";
import "./cart-dropdown.scss";
import CartItem from "./cart-item.component";
import { useContext } from "react";
import { cartContext } from "../context/cartDropDownContext";

const DropDownMenu = () => {
	const { cartItem } = useContext(cartContext);
	return (
		<div className="cart-dropdown-container">
			<div className="cart-item">
				{cartItem.map((item) => (
					<CartItem key={item.id} cartItem={item} />
				))}
			</div>
			<Link to={"checkOut"}>
				<button type="none">BUY NOW</button>
			</Link>
		</div>
	);
};

export default DropDownMenu;
