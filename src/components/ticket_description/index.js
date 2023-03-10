import React, { useContext } from "react";
import styles from "./index.module.css";
import { DarkModeContext } from "@/context/dark_mode";

function TicketDescription({ status }) {
	const { isDarkMode } = useContext(DarkModeContext);
	const theme = !isDarkMode ? styles.light : styles.dark;
	const seat = status === 1 ? "unavaliable" : "reserved";
	const legend = status === 1 ? "Ocupado" : "reservado";

	return (
		<div className={`${styles.busDescription} ${theme}`}>
			<span className={styles[seat]}>{legend}</span>
		</div>
	);
}
export default React.memo(TicketDescription);
