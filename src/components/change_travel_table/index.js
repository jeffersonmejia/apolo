import { ChangeTravelRows } from "../change_travel_rows";
import { TravelTicketContext } from "@/context/travel_ticket";
import { useContext, useEffect, useState } from "react";
import styles from "./index.module.css";

export function ChangeTravelTable({ setModal, travels }) {
	const travel_id = useContext(TravelTicketContext);
	const [isEdit, setEdit] = useState(false);
	const handleClick = ({ currentTarget }) => {
		if (currentTarget.matches("button")) {
			if (isEdit) {
				setEdit(false);
			} else {
				setModal(false);
			}
		} else {
			setEdit(true);
		}
	};

	return (
		<>
			{isEdit && (
				<form className={styles.edit}>
					<fieldset>
						<legend>
							<h3>Editar viaje</h3>
						</legend>
						<label>Fecha</label>
						<input type="date" defaultValue={travels[0].date} />
						<label>Hora</label>
						<input type="time" defaultValue={travels[0].hour} />
						<label>Bus</label>
						<input
							type="text"
							placeholder="Ingresa el bus"
							defaultValue={travels[0].bus}
						/>
						<label>Chofer</label>
						<input
							type="text"
							placeholder="Ingresa el chofer"
							defaultValue={travels[0].driver}
						/>
					</fieldset>
				</form>
			)}
			{!isEdit && (
				<>
					<table>
						<caption>Actual</caption>
						<thead>
							<tr>
								<th>Ruta</th>
								<th>Bus</th>
								<th>Fecha</th>
								<th>Hora</th>
								<th>Editar</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{travels[0].itinerary}</td>
								<td>{travels[0].bus}</td>
								<td>{travels[0].date}</td>
								<td>{travels[0].hour}</td>
								<td>
									<span class="material-symbols-outlined" onClick={handleClick}>
										edit
									</span>
								</td>
							</tr>
						</tbody>
					</table>
					<table>
						<caption>Creados</caption>
						<thead>
							<tr>
								<th>Ruta</th>
								<th>Bus</th>
								<th>Fecha</th>

								<th>Hora</th>
								<th>Agregar</th>
							</tr>
						</thead>
						<tbody>
							{travels.map((travel) => {
								if (parseInt(travel.travel_id) !== travel_id) {
									return (
										<ChangeTravelRows
											key={travel.travel_id}
											travel={travel}
											setModal={setModal}
										/>
									);
								}
							})}
						</tbody>
					</table>
				</>
			)}
			<button onClick={handleClick}>{!isEdit ? "Cerrar" : "Guardar"}</button>
		</>
	);
}
