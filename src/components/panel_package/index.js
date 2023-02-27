import styles from "./index.module.css";
import { PanelPackageData } from "../panel_package_form";
import { PanelPackageDetail } from "../panel_package_detail";
import { Loader } from "../loader";
import { useState } from "react";

export function PanelPackage() {
	const [isSenderCompleted, setSender] = useState(false);
	const [isReceptCompleted, setRecept] = useState(false);
	const [isVoucherPrinted, setVoucher] = useState(false);

	const handleSender = () => {
		setSender(true);
	};
	const cancelSend = () => {
		setSender(false);
	};

	const saveSend = () => {
		setRecept(true);
	};

	const cancelPrint = () => {
		setRecept(false);
	};

	const printVoucher = () => {
		setVoucher(true);
		setTimeout(() => {
			setVoucher(false);
			setRecept(false);
			setSender(false);
		}, 2000);
	};

	return (
		<div className={styles.package}>
			{!isSenderCompleted && (
				<form>
					<fieldset>
						<PanelPackageData person="Remitente" />
						<select>
							<option>Selecciona el tipo </option>
							<option>Sobre</option>
							<option>Paquete</option>
							<option>Saco</option>
							<option>Cooler</option>
						</select>
					</fieldset>
					<button onClick={handleSender}>Continuar</button>
				</form>
			)}
			{isSenderCompleted && !isReceptCompleted && (
				<form>
					<fieldset>
						<PanelPackageData person="Destinatario" />
						<select>
							<option>Selecciona el destino</option>
							<option>El Carmen</option>
							<option>Flavio Alfaro</option>
							<option>Chone</option>
							<option>Tosagua</option>
						</select>
					</fieldset>
					<div className={styles.groupBtn}>
						<button onClick={saveSend}>Guardar</button>
						<small onClick={cancelSend}>Volver</small>
					</div>
				</form>
			)}
			{isReceptCompleted && !isVoucherPrinted && (
				<div className={styles.detail}>
					<PanelPackageDetail />
					<div className={styles.groupBtn}>
						<button onClick={printVoucher}>Imprimir</button>
						<small onClick={cancelPrint}>Volver</small>
					</div>
				</div>
			)}
			{isVoucherPrinted && (
				<div className={styles.message}>
					<small>Imprimiento comprobante...</small>
					<Loader />
				</div>
			)}
		</div>
	);
}
