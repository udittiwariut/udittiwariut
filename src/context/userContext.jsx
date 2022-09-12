import { createContext, useState, useEffect } from "react";
import { authStage } from "../utlis/firebase/utls-firebase";
export const UserContext = createContext({
	curretUser: null,
	setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
	const [curretUser, setCurrentUser] = useState(null);
	const value = { curretUser, setCurrentUser };
	useEffect(() => {
		const unsbscrib = authStage((user) => {});
	});
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
