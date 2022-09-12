import "./category.style.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/home.route";
import Navigation from "./Routes/Navigation.route";
import SingIn from "./Routes/Sing-in.Route";
import Shop from "./Routes/shop.route";
import CheckOutPage from "./component/checkOut-page.component";
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index={true} element={<Home />} />
				<Route path="sing-in" element={<SingIn />} />
				<Route path="shop/*" element={<Shop />} />
				<Route path="checkOut" element={<CheckOutPage />}></Route>
			</Route>
		</Routes>
	);
};

export default App;
