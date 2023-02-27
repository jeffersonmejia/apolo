import styles from "./index.module.css";
import { Modal } from "../modal";
import { useContext, useEffect, useState } from "react";
import { PanelSectionContext } from "@/context/panel_section";

export function PanelResumen() {
	const [isModalActive, setModal] = useState(false);
	const [sellContent, setSell] = useState("");
	const [cancelContent, setCancel] = useState("");
	const [sectionContent, setSection] = useState("");
	const { isTicketActive } = useContext(PanelSectionContext);

	const handleModal = () => {
		setModal(true);
	};

	const cancelChangeTravel = () => {
		setModal(false);
	};

	const changeTravel = () => {
		setModal(false);
	};

	useEffect(() => {
		if (isTicketActive) {
			setSection("Boletos");
			setSell("Vendidos");
			setCancel("Anulados");
		} else {
			setSection("Encomiendas");
			setSell("Vendidas");
			setCancel("Anuladas");
		}
	}, [isTicketActive]);

	return (
		<div className={styles.resume}>
			<table className={styles.resumenTable}>
				<caption>Información del viaje</caption>
				<thead>
					<tr>
						<th>Número de bus</th>
						<td>78</td>
					</tr>
					<tr>
						<th>Viaje actual</th>
						<td>Santo Domingo - Manta</td>
					</tr>
					<tr>
						<th>Salida</th>
						<td>10:00</td>
					</tr>
				</thead>
			</table>
			<table className={styles.resumenTable}>
				<caption>{sectionContent}</caption>
				<thead>
					<tr>
						<th>{sellContent}</th>
						<td>23</td>
					</tr>
					<tr>
						<th>{cancelContent}</th>
						<td>2</td>
					</tr>
					<tr>
						<th>Disponibles</th>
						<td>17</td>
					</tr>
				</thead>
			</table>
			<table className={styles.resumenTable}>
				<caption>Ventas</caption>
				<thead>
					<tr>
						<th>Recaudado</th>
						<td>$20.00</td>
					</tr>
					<tr>
						<th>Ahorrado</th>
						<td>--</td>
					</tr>
					<tr>
						<th>Total</th>
						<td>$20.00</td>
					</tr>
				</thead>
			</table>
			<div className={styles.groupBtn}>
				<button>Cerrar viaje</button>
				<small onClick={handleModal}>Cambiar viaje</small>
			</div>
			{isModalActive && (
				<Modal>
					<form className={styles.listTravel}>
						<fieldset>
							<legend>Listado de viajes creados</legend>
							<select>
								<option>Selecciona un viaje</option>
								<option>Santo Domingo - Manta</option>
								<option>Quito - Manta</option>
								<option>Santo Domingo - Coca</option>
							</select>
							<select>
								<option>Selecciona un bus</option>
								<option>1</option>
								<option>78</option>
								<option>64</option>
								<option>32</option>
							</select>
						</fieldset>
						<div className={styles.groupBtn}>
							<button onClick={changeTravel}>Cambiar viaje actual</button>
							<small onClick={cancelChangeTravel}>Cancelar</small>
						</div>
					</form>
				</Modal>
			)}
		</div>
	);
}
