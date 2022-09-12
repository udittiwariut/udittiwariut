import { useContext } from "react";
import { cartContext } from "../context/cartDropDownContext";
const CheckOutItem = ({ item }) => {
	const { name, price, imageUrl, quantity } = item;
	const { addItemToCart, removeItemFromCart } = useContext(cartContext);
	return (
		<div>
			<img src={imageUrl} alt={name} />
			<h2 className="description">{name}</h2>
			<div style={{ display: "flex" }}>
				<button onClick={() => removeItemFromCart(item)}>decrease</button>
				<h2>{quantity}</h2>
				<button onClick={() => addItemToCart(item)}>Increase</button>
			</div>
			<h2 className="Price">{price}</h2>
			<button
				className="removeBtn"
				onClick={(e) => removeItemFromCart(item, e.target.className)}
			>
				Remove
			</button>
		</div>
	);
};

export default CheckOutItem;
