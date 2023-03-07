import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setDarkMode] = useState(
		JSON.parse(localStorage.getItem("dark")) || false
	);
	const handleDarkMode = () => {
		setDarkMode(isDarkMode ? false : true);
	};
	const data = {
		isDarkMode,
		handleDarkMode,
		setDarkMode,
	};
	useEffect(() => {
		localStorage.setItem("dark", isDarkMode);
	}, [isDarkMode]);

	return <DarkModeContext.Provider value={data}>{children}</DarkModeContext.Provider>;
};

export { DarkModeContext, DarkModeProvider };
