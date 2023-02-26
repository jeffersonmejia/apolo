import styles from "./index.module.css";
import { PanelClientData } from "../panel_client_data";
import { PanelClientTravel } from "../panel_client_travel";
import { useState } from "react";

export function PanelClient() {
	const [isLastForm, setLastForm] = useState(false);

	const handleClick = () => {
		setLastForm(!isLastForm ? true : false);
	};

	return (
		<form className={styles.clientForm}>
			<legend>{!isLastForm ? "Datos del cliente" : "Datos del viaje"}</legend>
			<fieldset>
				{!isLastForm && <PanelClientData />}
				{isLastForm && <PanelClientTravel />}
			</fieldset>
			<button onClick={handleClick}>{!isLastForm ? "Siguiente" : "Guardar"}</button>
		</form>
	);
}
