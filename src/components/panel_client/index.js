import styles from "./index.module.css";
import { PanelClientData } from "../panel_client_data";
import { PanelClientTravel } from "../panel_client_travel";
import { Loader } from "../loader";
import { Modal } from "../modal";
import { useContext, useState } from "react";
import { DarkModeContext } from "@/context/dark_mode";

export function PanelClient() {
	const [isLastForm, setLastForm] = useState(false);
	const [isModalActive, setModal] = useState(false);
	const [isPrintedTicket, setPrinted] = useState(false);
	const { isDarkMode } = useContext(DarkModeContext);
	const printClientData = () => {
		if (!isLastForm) {
			setLastForm(true);
		} else {
			setModal(true);
		}
	};

	const printTicket = () => {
		setPrinted(true);
		setTimeout(() => {
			setPrinted(false);
			setModal(false);
		}, 2000);
	};

	const CancelPrint = () => {
		setModal(false);
	};

	const handleClick = () => {
		setLastForm(!isLastForm ? true : false);
	};

	return (
		<>
			<form
				className={`${styles.clientForm} ${!isDarkMode ? styles.light : styles.dark}`}
			>
				<legend>{!isLastForm ? "Datos del cliente" : "Datos del viaje"}</legend>
				<fieldset>
					{!isLastForm && <PanelClientData />}
					{isLastForm && <PanelClientTravel />}
				</fieldset>
				<button onClick={printClientData}>
					{!isLastForm ? "Siguiente" : "Imprimir"}
				</button>
				<small className={styles.print} onClick={handleClick}>
					{isLastForm ? " Agregar más" : ""}
				</small>
			</form>
			{isModalActive && (
				<Modal>
					<div className={styles.modalContent}>
						{!isPrintedTicket && (
							<table>
								<caption>Datos del cliente</caption>
								<tr>
									<th>Cliente</th>
									<td>Jefferson Mejia</td>
								</tr>
								<tr>
									<th>Asientos</th>
									<td>24, 25, 26</td>
								</tr>
								<tr>
									<th>Tipo de pasaje</th>
									<td>Especial</td>
								</tr>
								<tr>
									<th>Costo unitario</th>
									<td>$18.00</td>
								</tr>
								<tr>
									<th>Descuento</th>
									<td>$2.00</td>
								</tr>
								<tr>
									<th>Total</th>
									<td>$16.00</td>
								</tr>
							</table>
						)}
						{isPrintedTicket && (
							<>
								<small className={styles.printMessage}>Impriendo pasaje...</small>
								<Loader />
							</>
						)}
						<div className={styles.groupBtn}>
							{!isPrintedTicket && <button onClick={printTicket}>Imprimir</button>}
							{!isPrintedTicket && <small onClick={CancelPrint}>Cancelar</small>}
						</div>
					</div>
				</Modal>
			)}
		</>
	);
}
