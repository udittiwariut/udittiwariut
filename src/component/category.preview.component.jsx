import ProductCard from "./card-container.component";
import "./category.preview.scss";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, product }) => {
	return (
		<div className="category-preview-container">
			<h2>
				<Link to={`${title}`}>
					<span className="title">{title.toUpperCase()}</span>
				</Link>
			</h2>
			<div className="preview">
				{product
					.filter((_, idx) => idx < 4)
					.map((item) => (
						<ProductCard key={item.id} product={item} />
					))}
			</div>
		</div>
	);
};

export default CategoryPreview;
