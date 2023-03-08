import styles from "./index.module.css";
import { PanelSectionContext } from "@/context/panel_section";
import { useContext } from "react";
import { CreateTravelContext } from "@/context/create_travel";
import { CreateTravel } from "../create_travel";
import { DarkModeContext } from "@/context/dark_mode";

export function PanelAside() {
	const {
		handleTicketActive,
		handlePackageActive,
		handleReportActive,
		isTicketActive,
		isPackageActive,
		isReportActive,
	} = useContext(PanelSectionContext);
	const { handleModalCreateTravel } = useContext(CreateTravelContext);
	const { isDarkMode } = useContext(DarkModeContext);
	const theme = !isDarkMode ? styles.light : styles.dark;

	return (
		<>
			<aside className={`${styles.aside} ${theme}`}>
				<ul>
					<li className={styles.create} onClick={handleModalCreateTravel}>
						Crear viaje <span className="material-symbols-outlined">add_circle</span>
					</li>
					<li onClick={handleTicketActive} className={isTicketActive && styles.active}>
						Boleteria
					</li>
					<li onClick={handlePackageActive} className={isPackageActive && styles.active}>
						Encomiendas
					</li>
					<li onClick={handleReportActive} className={isReportActive && styles.active}>
						Reportes
					</li>
				</ul>
			</aside>
			<CreateTravel />
		</>
	);
}
