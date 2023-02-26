import styles from "./index.module.css";
import { PanelTicketBusSeats } from "../panel_ticket_bus_seats";

export function PanelTicketBus() {
	return (
		<div className={styles.bus}>
			<PanelTicketBusSeats />
			<PanelTicketBusSeats />
		</div>
	);
}
