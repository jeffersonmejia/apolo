import styles from "./index.module.css";
import { DarkModeContext } from "@/context/dark_mode";
import { useContext } from "react";
export function PanelTicketBusDescription({ status, description }) {
	const { isDarkMode } = useContext(DarkModeContext);
	const theme = !isDarkMode ? styles.light : styles.dark;
	return (
		<div className={`${styles.busDescription} ${theme}`}>
			<span className={styles[status]}>{description}</span>
		</div>
	);
}
