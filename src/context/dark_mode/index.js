import { createContext, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setDarkMode] = useState(false);
	const handleDarkMode = () => {
		setDarkMode(isDarkMode ? false : true);
	};
	const data = { isDarkMode, handleDarkMode };
	return <DarkModeContext.Provider value={data}>{children}</DarkModeContext.Provider>;
};

export { DarkModeContext, DarkModeProvider };
