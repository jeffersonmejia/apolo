import { useContext } from "react";
import styles from "./index.module.css";
import { CreateTravelContext } from "@/context/create_travel";
import { Modal } from "../modal";
import { Loader } from "../loader";

export function CreateTravel() {
	const {
		isModalCreateActive,
		handleModalCreateTravel,
		isTypeSelected,
		handleTypeSelected,
		isDateSelected,
		handleDateSelected,
		isSchedulelSelected,
		handleScheduleSelected,
		isItinerarySelected,
		handleItinerarySelected,
		handleHourSelected,
		isHourSelected,
		createTravel,
		isTravelCreated,
	} = useContext(CreateTravelContext);

	return (
		<>
			{isModalCreateActive && (
				<Modal>
					<form className={styles.createForm}>
						{!isTravelCreated && (
							<fieldset>
								<legend>
									<h3>Crear viaje</h3>
									<small>Aquí puedes crear un nuevo viaje</small>
								</legend>
								<select onChange={handleTypeSelected}>
									<option value={0}>Selecciona una opción</option>
									<option value={1}>Boleteria</option>
									<option value={2}>Encomienda</option>
								</select>
								{isTypeSelected && (
									<div className={styles.formDate}>
										<label>Fecha</label>
										<input type="date" onChange={handleDateSelected} />
									</div>
								)}
								{isDateSelected && (
									<select onChange={handleScheduleSelected}>
										<option>Selecciona una jornada</option>
										<option>Matutina</option>
										<option>Vespertina</option>
										<option>Nocturna</option>
									</select>
								)}
								{isSchedulelSelected && (
									<select onChange={handleItinerarySelected}>
										<option>Selecciona una ruta</option>
										<option>Santo Domingo - Manta</option>
										<option>Santo Domingo - Puerto López</option>
										<option>Santo Domingo - Guayaquil</option>
										<option>Santo Domingo - Quito</option>
										<option>Quito - Manta</option>
									</select>
								)}
								{isItinerarySelected && (
									<select onClick={handleHourSelected}>
										<option>Selecciona la hora</option>
										<option>07:00</option>
										<option>09:00</option>
										<option>10:30</option>
										<option>11:45</option>
									</select>
								)}
								<div className={styles.groupBtn}>
									<button
										onClick={isHourSelected ? createTravel : handleModalCreateTravel}
									>
										{!isHourSelected ? "Cerrar" : "Crear"}
									</button>
									{isHourSelected && (
										<small onClick={handleModalCreateTravel}>Cerrar</small>
									)}
								</div>
							</fieldset>
						)}
						{isTravelCreated && (
							<div className={styles.loaderTravel}>
								<small>Creando viaje...</small>
								<Loader />
							</div>
						)}
					</form>
				</Modal>
			)}
		</>
	);
}
