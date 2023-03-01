import styles from "./index.module.css";
import { PanelSectionContext } from "@/context/panel_section";
import { useContext, useState } from "react";
import { Modal } from "../modal";

export function PanelAside() {
	const {
		handleTicketActive,
		handlePackageActive,
		handleReportActive,
		isTicketActive,
		isPackageActive,
		isReportActive,
	} = useContext(PanelSectionContext);

	const [isModalActive, setModalActive] = useState(false);

	const handleCreateTravel = () => {
		setModalActive(isModalActive ? false : true);
	};

	return (
		<>
			<aside className={styles.aside}>
				<ul>
					<li className={styles.create}>
						Crear viaje <span class="material-symbols-outlined">add_circle</span>
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
			<Modal>
				<form className={styles.createForm}>
					<fieldset>
						<legend>
							<h3>Crear viaje</h3>
							<small>Aquí puedes consultar las frecuencia disponibles</small>
						</legend>
						<select>
							<option>Selecciona una opción</option>
							<option>Boleteria</option>
							<option>Encomienda</option>
						</select>
						<div className={styles.formDate}>
							<label>Fecha</label>
							<input type="date" />
						</div>
						<table>
							<thead>
								<tr>
									<th>Bus</th>
									<th>Ruta</th>
									<th>hora</th>
									<th>Crear</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Santo Domingo - El Carmen</td>
									<td>14:00</td>
									<td>
										<span class="material-symbols-outlined">add_circle</span>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Santo Domingo - El Carmen</td>
									<td>14:00</td>
									<td>
										<span class="material-symbols-outlined">add_circle</span>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Santo Domingo - El Carmen</td>
									<td>14:00</td>
									<td>
										<span class="material-symbols-outlined">add_circle</span>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Santo Domingo - El Carmen</td>
									<td>14:00</td>
									<td>
										<span class="material-symbols-outlined">add_circle</span>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Santo Domingo - El Carmen</td>
									<td>14:00</td>
									<td>
										<span class="material-symbols-outlined">add_circle</span>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Santo Domingo - El Carmen</td>
									<td>14:00</td>
									<td>
										<span class="material-symbols-outlined">add_circle</span>
									</td>
								</tr>
							</tbody>
						</table>
						<div className={styles.createFormPages}>
							<button>Anterior</button>
							<small>1 ... 7</small>
							<button>Siguiente</button>
						</div>
						<small className={styles.closeBtn}>Cerrar</small>
					</fieldset>
				</form>
			</Modal>
		</>
	);
}
