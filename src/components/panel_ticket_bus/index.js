import styles from "./index.module.css";
import { PanelTicketBusSeats } from "../panel_ticket_bus_seats";
import { PanelTicketBusDescription } from "../panel_ticket_bus_desc";
import { DarkModeContext } from "@/context/dark_mode";
import { useContext } from "react";

export function PanelTicketBus() {
	const { isDarkMode } = useContext(DarkModeContext);
	const theme = !isDarkMode ? styles.light : styles.dark;
	return (
		<div className={`${styles.bus} ${theme}`}>
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
