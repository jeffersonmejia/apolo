import styles from "./index.module.css";
import { PanelSectionContext } from "@/context/panel_section";
import { useContext, useEffect } from "react";
import { CreateTravelContext } from "@/context/create_travel";
import { CreateTravel } from "../create_travel";
import { DarkModeContext } from "@/context/dark_mode";

export function PanelAside() {
	const { handleSection, isTicket, isPackage, isReport } =
		useContext(PanelSectionContext);

	const { toggleModal } = useContext(CreateTravelContext);
	const { isDarkMode } = useContext(DarkModeContext);
	const theme = !isDarkMode ? styles.light : styles.dark;
	return (
		<>
			<aside className={`${styles.aside} ${theme}`}>
				<ul>
					<li className={styles.create} onClick={toggleModal}>
						<p>Crear viaje</p>
						<span className="material-symbols-outlined">add_circle</span>
					</li>
					<li className={isTicket ? styles.active : ""} onClick={handleSection} value={0}>
						Boletería
					</li>
					{/* <li
						className={isPackage ? styles.active : ""}
						onClick={handleSection}
						value={1}
					>
						Encomiendas
					</li>
					<li className={isReport ? styles.active : ""} onClick={handleSection} value={2}>
						Reportes
					</li> */}
				</ul>
			</aside>
			<CreateTravel />
		</>
	);
}
