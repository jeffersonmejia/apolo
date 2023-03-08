import styles from "./index.module.css";
import { DarkModeContext } from "@/context/dark_mode";
import { useContext } from "react";

export function Loader({ message }) {
	const { isDarkMode } = useContext(DarkModeContext);
	const theme = !isDarkMode ? styles.light : styles.dark;
	return (
		<div className={`${styles.loader} ${theme}`}>
			<span></span>
			{message && <small>{message}</small>}
		</div>
	);
}
