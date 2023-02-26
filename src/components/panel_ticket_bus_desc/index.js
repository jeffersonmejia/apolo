import styles from "./index.module.css";
export function PanelTicketBusDescription({ status, description }) {
	return (
		<div className={styles.busDescription}>
			<span className={styles[status]}>{description}</span>
		</div>
	);
}
