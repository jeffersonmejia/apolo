import { createContext, useContext, useEffect, useState } from "react";
import { SigninContext } from "../signin";

const SupportContext = createContext();

const SupportProvider = ({ children }) => {
	const { data } = useContext(SigninContext);
	const [isSupport, setSupport] = useState(false);

	useEffect(() => {
		setSupport(data === null ? true : false);
	}, []);

	const contextState = { isSupport, setSupport };
	return (
		<SupportContext.Provider value={contextState}>{children}</SupportContext.Provider>
	);
};

export { SupportContext, SupportProvider };
