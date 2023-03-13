import { Modal } from "../modal";
import { DarkModeContext } from "@/context/dark_mode";
import styles from "./index.module.css";
import { useContext, useState } from "react";
import { GroupBtn } from "../group_btn";

export function PanelClientVoucher({ setModal }) {
	const [isPrintedTicket] = useState(false);
	const { isDarkMode } = useContext(DarkModeContext);
	const theme = !isDarkMode ? styles.light : styles.dark;

	const handleClick = () => {
		setModal(false);
	};

	return (
		<Modal>
			<div className={`${styles.modal} ${theme}`}>
				{!isPrintedTicket && (
					<table>
						<caption>Datos del cliente</caption>
						<tr>
							<th>Nombres</th>
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
				{isPrintedTicket && <Loader message="Imprimiendo..." />}
				{!isPrintedTicket && (
					<GroupBtn btn_1="Imprimir" btn_2="Cancelar" MyClick={handleClick} />
				)}
			</div>
		</Modal>
	);
}
