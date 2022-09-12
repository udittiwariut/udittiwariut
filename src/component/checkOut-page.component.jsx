import CheckOutItem from "./checkOutItem.componet";
import { useContext } from "react";
import { cartContext } from "../context/cartDropDownContext";

const CheckOutPage = () => {
	const { cartItem, cartTotal } = useContext(cartContext);

	return (
		<div>
			{cartItem.map((item) => {
				return <CheckOutItem item={item} />;
			})}
			<div className="cartTotal">
				<h2> Your cart total is {cartTotal}</h2>
			</div>
		</div>
	);
};

export default CheckOutPage;
