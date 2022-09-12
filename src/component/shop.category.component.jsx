import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/productsContext";
import ProductCard from "./card-container.component";
import "./shop.category.scss";
const Category = () => {
	const { category } = useParams();

	const { cetagorieMap } = useContext(ProductContext);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(cetagorieMap[category.toLocaleLowerCase()]);
	}, [category, cetagorieMap, setProducts]);

	return (
		<div>
			<h2 className="category">{category.toUpperCase()}</h2>
			<div className="shop-category-container">
				{products &&
					products.map((product) => <ProductCard product={product} />)}
			</div>
		</div>
	);
};

export default Category;
