import styles from "./index.module.css";
import { PanelSectionContext } from "@/context/panel_section";
import { useContext } from "react";
import { CreateTravelContext } from "@/context/create_travel";
import { CreateTravel } from "../create_travel";

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

	return (
		<>
			<aside className={styles.aside}>
				<ul>
					<li className={styles.create} onClick={handleModalCreateTravel}>
						Crear viaje <span className="material-symbols-outlined">add_circle</span>
					</li>
					<li
						onClick={handleTicketActive}
						className={styles[isTicketActive ? "asideActive" : ""]}
					>
						Boleteria
					</li>
					<li
						onClick={handlePackageActive}
						className={styles[isPackageActive ? "asideActive" : ""]}
					>
						Encomiendas
					</li>
					<li
						onClick={handleReportActive}
						className={styles[isReportActive ? "asideActive" : ""]}
					>
						Reportes
					</li>
				</ul>
			</aside>
			<CreateTravel />
		</>
	);
}
