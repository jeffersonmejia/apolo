import styles from "./index.module.css";
import { PanelTicketBus } from "../panel_ticket_bus";
import { PanelClient } from "../panel_client";
import { SeatsTicketProvider } from "@/context/seats_ticket";

export function PanelTicket() {
	return (
		<div className={styles.panelTicket}>
			<SeatsTicketProvider>
				<PanelTicketBus></PanelTicketBus>
				<PanelClient />
			</SeatsTicketProvider>
		</div>
	);
}
