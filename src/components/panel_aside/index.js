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
					<li className={styles.create} onClick={handleCreateTravel}>
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
			{isModalActive && (
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
							<select>
								<option>Selecciona una ruta</option>
								<option>Santo Domingo Manta</option>
								<option>Santo Domingo Puerto López</option>
								<option>Santo Domingo Guayaquil</option>
								<option>Santo Domingo Quito</option>
							</select>
							<div className={styles.formDate}>
								<label>Fecha</label>
								<input type="date" />
							</div>
							<table>
								<thead>
									<tr>
										<th>Bus</th>
										<th>hora</th>
										<th>Crear</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>14:00</td>
										<td>
											<span class="material-symbols-outlined">add_circle</span>
										</td>
									</tr>
									<tr>
										<td>1</td>
										<td>10:00</td>
										<td>
											<span class="material-symbols-outlined">add_circle</span>
										</td>
									</tr>
									<tr>
										<td>1</td>
										<td>13:00</td>
										<td>
											<span class="material-symbols-outlined">add_circle</span>
										</td>
									</tr>
									<tr>
										<td>1</td>
										<td>14:00</td>
										<td>
											<span class="material-symbols-outlined">add_circle</span>
										</td>
									</tr>
									<tr>
										<td>1</td>
										<td>14:00</td>
										<td>
											<span class="material-symbols-outlined">add_circle</span>
										</td>
									</tr>
									<tr>
										<td>1</td>
										<td>14:00</td>
										<td>
											<span class="material-symbols-outlined">add_circle</span>
										</td>
									</tr>
								</tbody>
							</table>
							<button onClick={handleCreateTravel}>Cerrar</button>
						</fieldset>
					</form>
				</Modal>
			)}
		</>
	);
}
