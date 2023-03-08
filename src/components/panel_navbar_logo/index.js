import { useContext } from "react";
import styles from "./index.module.css";
import { PanelAsideContext } from "@/context/panel_aside";
import { DarkModeContext } from "@/context/dark_mode";

export function PanelNavbarLogo() {
	const { handleAside } = useContext(PanelAsideContext);
	const { isDarkMode } = useContext(DarkModeContext);
	const theme = !isDarkMode ? styles.light : styles.dark;
	return (
		<>
			<span
				className={`material-symbols-outlined  
				${styles.burger}
				${theme}`}
				onClick={handleAside}
			>
				menu
			</span>
			<h4>APOLO</h4>
		</>
	);
}
