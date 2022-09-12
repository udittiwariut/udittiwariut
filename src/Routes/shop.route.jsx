import { Routes, Route } from "react-router-dom";
import ShopPage from "../component/shop.page.component";
import Cetagory from "../component/shop.category.component";
const Shop = () => {
	return (
		<Routes>
			<Route index element={<ShopPage />} />
			<Route path=":category" element={<Cetagory />} />
		</Routes>
	);
};

export default Shop;
