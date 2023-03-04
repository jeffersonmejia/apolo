import styles from "./index.module.css";
import { PanelTicketBusSeats } from "../panel_ticket_bus_seats";
import { PanelTicketBusDescription } from "../panel_ticket_bus_desc";
import { useHttp } from "@/hooks/useHttp";

export function PanelTicketBus() {
	return (
		<div className={styles.bus}>
			<div>
				<PanelTicketBusDescription description="Disponible" status="avaliable" />
				<PanelTicketBusDescription description="Ocupado" status="unavaliable" />
				<PanelTicketBusDescription description="Reservado" status="reserved" />
			</div>
			<PanelTicketBusSeats />
			<PanelTicketBusSeats />
			<small>Reservar asiento</small>
		</div>
	);
}
