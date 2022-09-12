import Cetagory from "./cetagory.component";
import "./darectory.scss";
const Darectory = (props) => {
	const categories = props.categories;
	return (
		<div className="categories-container">
			{categories.map((category) => {
				return <Cetagory category={category} />;
			})}
		</div>
	);
};
export default Darectory;
