import "./card-container.scss";
import { useContext } from "react";
import { cartContext } from "../context/cartDropDownContext";
const ProductCard = ({ product }) => {
	const { name, imageUrl, price } = product;

	const { addItemToCart } = useContext(cartContext);
	return (
		<div className="product-card-Conatiner">
			<img src={imageUrl} alt={name} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<button onClick={() => addItemToCart(product)}> Add to the cart</button>
		</div>
	);
};

export default ProductCard;
