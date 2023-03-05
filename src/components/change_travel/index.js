import { Modal } from "../modal";
import styles from "./index.module.css";
import { GroupBtn } from "../group_btn";

export function ChangeTravel({ setModal }) {
	const handleClick = ({ currentTarget }) => {
		if (currentTarget.matches("button")) {
			setModal(false);
		} else {
			setModal(false);
		}
	};

	return (
		<Modal>
			<form className={styles.listTravel}>
				<fieldset>
					<legend>Listado de viajes creados</legend>
					<div className={styles.date}>
						<label>
							<small>Fecha</small>
						</label>
						<input type="date" />
					</div>
					<select>
						<option>Selecciona la hora</option>
						<option>15:00</option>
						<option>15:00</option>
						<option>15:00</option>
					</select>
					<select>
						<option>Selecciona un viaje</option>
						<option>Santo Domingo - Manta</option>
						<option>Quito - Manta</option>
						<option>Manta - Coca</option>
					</select>
					<select>
						<option>Selecciona un bus</option>
						<option>1</option>
						<option>78</option>
						<option>64</option>
						<option>32</option>
					</select>
				</fieldset>
				<GroupBtn btn_1="Cambiar viaje actual" btn_2="Cancelar" MyClick={handleClick} />
			</form>
		</Modal>
	);
}
