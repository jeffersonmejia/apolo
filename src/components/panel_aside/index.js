import styles from "./index.module.css";
import { PanelSectionContext } from "@/context/panel_section";
import { useContext } from "react";

export function PanelAside() {
	const {
		handleTicketActive,
		handlePackageActive,
		handleReportActive,
		isTicketActive,
		isPackageActive,
		isReportActive,
	} = useContext(PanelSectionContext);

	return (
		<aside className={styles.aside}>
			<ul>
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
	);
}
