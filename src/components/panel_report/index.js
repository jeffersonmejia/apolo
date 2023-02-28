import styles from "./index.module.css";
import PanelReportQuery from "../panel_report_query";
import { useState } from "react";
import { Modal } from "../modal";

export function PanelReport() {
	const [travelDescription, setTravelDescription] = useState("");
	const [travelSelected, setTravelSelected] = useState("");
	const [isTravelQuery, setTravelQuery] = useState(false);
	const [isTravelActive, setTravelActive] = useState(false);
	const [isPackageActive, setPackageActive] = useState(false);
	const [isReportQuery, setReportQuery] = useState(false);
	const [isModalActive, setModalActive] = useState(false);

	const changeTravelDescription = (e) => {
		setTravelSelected(e.target.value);
		if (e.target.value === "ticket") {
			setTravelDescription(
				"Aquí puedes consultar salidas, viajes cerrados y el valor recaudado"
			);
			setTravelActive(true);
			setPackageActive(false);
		} else if (e.target.value === "package") {
			setTravelDescription(
				"Aquí puedes consultar el envío y recepción de encomiendas de cualquier matriz"
			);
			setTravelActive(false);
			setPackageActive(true);
		} else {
			setTravelDescription("");
			setTravelActive(false);
			setPackageActive(false);
		}
	};

	const handleTravel = () => {
		setModalActive(isModalActive ? false : true);
		setTravelQuery(isTravelQuery ? false : true);
	};

	const handleReport = () => {
		setModalActive(isModalActive ? false : true);
		setReportQuery(isReportQuery ? false : true);
	};
	return (
		<div className={styles.report}>
			<form>
				<legend>
					<h3>Búsqueda por viajes</h3>
					<small>{travelDescription}</small>
				</legend>
				<fieldset>
					<select value={travelSelected} onChange={changeTravelDescription}>
						<option>Selecciona el tipo </option>
						<option value="ticket">Boleto</option>
						<option value="package">Encomienda </option>
					</select>
					<PanelReportQuery />
				</fieldset>
				<button onClick={handleTravel}>Consultar</button>
			</form>
			<form>
				<fieldset>
					<legend>
						<h3>Reporte diario</h3>
						<small>
							Aquí puedes consultar los ingresos mensuales en tu día. La consulta se
							realiza considerando la fecha final actual
						</small>
					</legend>
					<select>
						<option>Selecciona el tipo</option>
						<option>Boleto</option>
						<option>Encomienda</option>
					</select>
					<label>Fecha de inicio</label>
					<input type="date" />
				</fieldset>
				<button onClick={handleReport}>Consultar</button>
			</form>
			{isModalActive && (
				<Modal>
					<div className={styles.modalContent}>
						{isTravelQuery && (isPackageActive || isTravelActive) && (
							<>
								<table>
									<caption>
										Resumen - {isTravelActive ? "Boleteria" : "Encomienda"}
									</caption>
									<tr>
										<th>Bus</th>
										<td>78</td>
									</tr>
									<tr>
										<th>Ruta</th>
										<td>Santo Domingo - Manta</td>
									</tr>
									<tr>
										<th>Fecha & hora</th>
										<td>15/01/2023 - 15:00</td>
									</tr>
									<tr>
										<th>Recaudado</th>
										<td>$40.00</td>
									</tr>
									<tr>
										<th>Ahorrado</th>
										<td>--</td>
									</tr>
									{!isTravelActive && (
										<>
											<tr>
												<th>Encomienda</th>
												<td>1 Paquete</td>
											</tr>
										</>
									)}
								</table>
								<button onClick={handleTravel}>Cerrar</button>
							</>
						)}
						{isReportQuery && (
							<>
								<table>
									<caption>Reporte diario - Boletería</caption>
									<tr>
										<th>Desde</th>
										<td>27/02/2023 - 00:00</td>
									</tr>
									<tr>
										<th>Hasta</th>
										<td>28/02/2023 - 14:00</td>
									</tr>
									<tr>
										<th>Recaudado</th>
										<td>$300.00</td>
									</tr>
								</table>
								<button onClick={handleReport}>Cerrar</button>
							</>
						)}
					</div>
				</Modal>
			)}
		</div>
	);
}
