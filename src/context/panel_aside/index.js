import { createContext, useState } from "react";

const PanelAsideContext = createContext();

const PanelAsideProvider = ({ children }) => {
	const [isAsideActive, setAsideActive] = useState(false);
	const handleAside = () => {
		setAsideActive(isAsideActive ? false : true);
	};

	const data = { isAsideActive, setAsideActive, handleAside };

	return <PanelAsideContext.Provider value={data}>{children}</PanelAsideContext.Provider>;
};

export { PanelAsideContext, PanelAsideProvider };
