import { useContext } from "react";
import styles from "./index.module.css";
import { CreateTravelContext } from "@/context/create_travel";
import { Modal } from "../modal";
import { LoaderButton } from "../loaderButton";
import { DarkModeContext } from "@/context/dark_mode";

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
							<legend>
								<h3>Crear viaje</h3>
								<small>Aquí puedes crear un nuevo viaje</small>
							</legend>
							<select>
								<option value={0}>Selecciona una opción</option>
								<option value={1}>Boleteria</option>
								<option value={2}>Encomienda</option>
							</select>
							<div className={styles.formDate}>
								<label>Fecha</label>
								<input type="date" />
							</div>
							<select>
								<option>Selecciona una jornada</option>
								<option>Matutina</option>
								<option>Vespertina</option>
								<option>Nocturna</option>
							</select>
							<select>
								<option>Selecciona una ruta</option>
								<option>Santo Domingo - Manta</option>
								<option>Santo Domingo - Puerto López</option>
								<option>Santo Domingo - Guayaquil</option>
								<option>Santo Domingo - Quito</option>
								<option>Quito - Manta</option>
							</select>
							<select>
								<option>Selecciona la hora</option>
								<option>07:00</option>
								<option>09:00</option>
								<option>10:30</option>
								<option>11:45</option>
							</select>
							<LoaderButton
								MyClick={createTravel}
								isLoading={isTravelCreated}
								defaultBtn="Crear viaje"
								loading="Creando viaje..."
							/>
							<small onClick={toggleModal}>Cerrar</small>
						</fieldset>
					</form>
				</Modal>
			)}
		</>
	);
}
