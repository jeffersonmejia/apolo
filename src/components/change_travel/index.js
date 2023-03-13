import { useContext, useState } from "react";
import styles from "./index.module.css";
import { DarkModeContext } from "@/context/dark_mode";
import { Modal } from "../modal";
import { ChangeTravelTable } from "../change_travel_table";

export function ChangeTravel({ setModal, listTravel }) {
	const [travels] = useState(listTravel.created);
	const { isDarkMode } = useContext(DarkModeContext);
	const theme = !isDarkMode ? styles.light : styles.dark;
	return (
		<Modal>
			<div className={`${styles.listTravel} ${theme}`}>
				{!travels.length > 0 && (
					<small className={styles.hasTravelCreated}>No tienes viajes crados</small>
				)}

				{travels.length > 0 && (
					<ChangeTravelTable setModal={setModal} travels={travels} />
				)}
			</div>
		</Modal>
	);
}
