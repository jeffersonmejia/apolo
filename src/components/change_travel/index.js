import { useEffect, useState } from "react";
import { Modal } from "../modal";
import styles from "./index.module.css";

export function ChangeTravel({ setModal, listTravel }) {
	const handleClick = () => {
		setModal(false);
	};

	const [travels, setTravels] = useState(listTravel);
	const changeTravel = () => {
		console.log("changing...");
		setTimeout(() => {
			setModal(false);
		}, 400);
	};
	return (
		<Modal>
			<div className={styles.listTravel}>
				{!travels.length > 0 && (
					<small className={styles.hasTravelCreated}>No tienes viajes crados</small>
				)}

				{travels.length > 0 && (
					<table>
						<caption>Viajes creados</caption>
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
								let { itinerary, bus, date, hour } = travel;
								return (
									<tr key={bus}>
										<td>{itinerary}</td>
										<td>{bus}</td>
										<td>{date}</td>
										<td>{hour}</td>
										<td>
											<span class="material-symbols-outlined" onClick={changeTravel}>
												add_circle
											</span>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				)}
				<button onClick={handleClick}>Cerrar</button>
			</div>
		</Modal>
	);
}
