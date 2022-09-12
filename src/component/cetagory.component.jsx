import "./cetagory.component.scss";
const Cetagory = (props) => {
	const { id, imageUrl, title } = props.category;

	return (
		<div key={id} className="category-container">
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl}})`,
				}}
			></div>
			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Shop now</p>
			</div>
		</div>
	);
};

export default Cetagory;
