import { useState } from "react";
import styles from "./index.module.css";
import { Modal } from "../modal";
import { ChangeTravelTable } from "../change_travel_table";

export function ChangeTravel({ setModal, listTravel }) {
	const [travels] = useState(listTravel.created);
	const handleClick = () => setModal(false);
	return (
		<Modal>
			<div className={styles.listTravel}>
				{!travels.length > 0 && (
					<small className={styles.hasTravelCreated}>No tienes viajes crados</small>
				)}

				{travels.length > 0 && (
					<ChangeTravelTable setModal={setModal} travels={travels} />
				)}
				<button onClick={handleClick}>Cerrar</button>
			</div>
		</Modal>
	);
}
