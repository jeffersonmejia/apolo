import { useContext, useEffect } from "react";
import styles from "./index.module.css";
import { CreateTravelContext } from "@/context/create_travel";
import { Modal } from "../modal";
import { LoaderButton } from "../loaderButton";
import { DarkModeContext } from "@/context/dark_mode";

const getCurrentDate = () => {
	const date = new Date();

	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	if (month < 10) month = "0" + month;
	if (day < 10) day = "0" + day;
	var today = year + "-" + month + "-" + day;

	return today;
};
const getCurrentHour = () => new Date().getHours();
const getDefaultSchedule = () => {
	let hour = getCurrentHour();
	if (hour >= 6 && hour <= 13) return 1;
	if (hour > 13 && hour < 19) return 2;
	if (hour >= 19 && hour < 6) return 3;
};

export function CreateTravel() {
	const { isModal, createTravel, isTravelCreated, toggleModal } =
		useContext(CreateTravelContext);
	const { isDarkMode } = useContext(DarkModeContext);
	const theme = !isDarkMode ? styles.light : styles.dark;

	return (
		<>
			{isModal && (
				<Modal>
					<form className={`${styles.create} ${theme}`}>
						<fieldset>
							<div className={styles.formDate}>
								<label>Fecha</label>
								<input type="date" defaultValue={getCurrentDate()} />
							</div>
							<select defaultValue={getDefaultSchedule()}>
								<option value={1}>Selecciona una jornada</option>
								<option value={1}>Matutina</option>
								<option value={2}>Vespertina</option>
								<option value={3}>Nocturna</option>
							</select>
							<select>
								<option>Selecciona la hora</option>
								<option>07:00</option>
								<option>09:00</option>
								<option>10:30</option>
								<option>11:45</option>
							</select>
							<select>
								<option>Selecciona una ruta</option>
								<option>Santo Domingo - Manta</option>
								<option>Santo Domingo - Puerto López</option>
								<option>Santo Domingo - Guayaquil</option>
								<option>Santo Domingo - Quito</option>
								<option>Quito - Manta</option>
							</select>
							<LoaderButton
								MyClick={createTravel}
								isLoading={isTravelCreated}
								defaultBtn="Crear viaje"
								loading="Creando..."
							/>
							<small onClick={toggleModal}>Cerrar</small>
						</fieldset>
					</form>
				</Modal>
			)}
		</>
	);
}
