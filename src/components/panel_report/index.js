import styles from "./index.module.css";
import PanelReportQuery from "../panel_report_query";
import { useState } from "react";

export function PanelReport() {
	const [travelDescription, setTravelDescription] = useState("");
	const [travelSelected, setTravelSelected] = useState("");

	const changeTravelDescription = (e) => {
		setTravelSelected(e.target.value);
		if (e.target.value === "ticket") {
			setTravelDescription(
				"Aquí puedes consultar salidas, viajes cerrados y el valor recaudado"
			);
		} else if (e.target.value === "package") {
			setTravelDescription(
				"Aquí puedes consultar el envío y recepción de encomiendas de cualquier matriz"
			);
		} else {
			setTravelDescription("");
		}
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
				<button>Consultar</button>
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
				<button>Consultar</button>
			</form>
		</div>
	);
}
