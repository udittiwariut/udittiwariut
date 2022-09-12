import { useEffect } from "react";
import { createContext, useState } from "react";
import { getCategoryAndDocument } from "../utlis/firebase/utls-firebase";

export const ProductContext = createContext({
	cetagorieMap: {},
});

export const ProductProvider = ({ children }) => {
	const [cetagorieMap, setCetagorieMap] = useState({});
	useEffect(() => {
		const getData = async () => {
			const data = await getCategoryAndDocument();
			setCetagorieMap(data);
		};
		getData();
	}, []);

	const value = { cetagorieMap };
	return (
		<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
	);
};
