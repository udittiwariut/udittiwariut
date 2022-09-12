import { useContext, Fragment } from "react";
import { ProductContext } from "../context/productsContext";
import "./shop.page.scss";
import CategoryPreview from "./../component/category.preview.component";
const ShopPage = () => {
	const { cetagorieMap } = useContext(ProductContext);

	return (
		<Fragment>
			{
				// object.keys provides arry of keys on tha object
				Object.keys(cetagorieMap).map((title) => {
					const product = cetagorieMap[title];
					return (
						<CategoryPreview key={title} title={title} product={product} />
					);
				})
			}
		</Fragment>
	);
};

export default ShopPage;
