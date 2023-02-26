import styles from "./index.module.css";

export function PanelTicketBusSeats() {
	const MAX_SEATS = 20,
		seatElements = [];
	const renderSeats = (() => {
		for (let i = 1; i <= MAX_SEATS; i++) {
			seatElements.push(<span key={i}>{i}</span>);
		}
	})();

	return <div className={styles.seats}>{seatElements}</div>;
}
