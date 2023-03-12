import { Modal } from "../modal";
import { LoaderButton } from "../loaderButton";
import styles from "./index.module.css";
import { DarkModeContext } from "@/context/dark_mode";
import { useContext, useState } from "react";

export function ChangeSeat({ setModal, seat, client, setSeatToChange, totalSeats }) {
	const { isDarkMode } = useContext(DarkModeContext);
	const [isLoading, setLoading] = useState(false);
	const [seatTyped, setSeatTyped] = useState(-1);
	const [isValidSeat, setIsValidSeat] = useState(true);

	const theme = !isDarkMode ? styles.light : styles.dark;
	const cancelOperation = () => setModal(false);
	const changeCurrentSeat = () => {
		setLoading(true);
		setTimeout(() => {
			setSeatToChange(seatTyped);
			setLoading(false);
			setModal(false);
		}, 2000);
	};
	const handleChange = ({ currentTarget }) => {
		const { value } = currentTarget;
		const numberValue = parseInt(value);
		if (numberValue < 1 || numberValue > totalSeats) {
			setIsValidSeat(false);
		} else {
			setIsValidSeat(true);
			setSeatTyped(parseInt(numberValue));
		}
	};

	return (
		<Modal>
			<div className={`${styles.change_seat} ${theme}`}>
				<form>
					<fieldset>
						<small>Cliente: {client}</small>
						<small>Asiento: {seat}</small>
					</fieldset>
					<fieldset>
						<input
							type="text"
							placeholder="Ingresa el nuevo asiento"
							maxLength="2"
							onChange={handleChange}
						/>
					</fieldset>
					{!isValidSeat && <small className={styles.error}>El asiento es inválido</small>}
					<div>
						<LoaderButton
							defaultBtn="Cambiar asiento"
							loading="Actualizando..."
							isLoading={isLoading}
							MyClick={changeCurrentSeat}
						/>
						<small onClick={cancelOperation}>Cerrar</small>
					</div>
				</form>
			</div>
		</Modal>
	);
}
