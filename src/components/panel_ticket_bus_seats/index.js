import styles from "./index.module.css";
import { DarkModeContext } from "@/context/dark_mode";
import { useContext } from "react";

export function PanelTicketBusSeats() {
	const { isDarkMode } = useContext(DarkModeContext);

	const theme = !isDarkMode ? styles.light : styles.dark;

	const MAX_SEATS = 20,
		seatElements = [];
	const renderSeats = () => {
		for (let i = 1; i <= MAX_SEATS; i++) {
			seatElements.push(<span key={i}>{i}</span>);
		}
	};
	renderSeats();

	return <div className={`${styles.seats} ${theme}`}>{seatElements}</div>;
}
