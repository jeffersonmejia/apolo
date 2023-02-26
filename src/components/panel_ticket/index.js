import { PanelTicketBus } from "../panel_ticket_bus";
import { PanelClient } from "../panel_client";
import styles from "./index.module.css";

export function PanelTicket() {
	return (
		<div className={styles.panelTicket}>
			<PanelTicketBus></PanelTicketBus>
			<PanelClient />
		</div>
	);
}
