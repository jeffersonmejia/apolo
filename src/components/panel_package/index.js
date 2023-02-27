import styles from "./index.module.css";
import { PanelPackageData } from "../panel_package_form";
import { useState } from "react";

export function PanelPackage() {
	const [isSenderCompleted, setSender] = useState(false);

	const handleSender = () => {
		setSender(true);
	};

	return (
		<div className={`${styles.package} ${isSenderCompleted ? styles.packageGrid : ""}`}>
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
			{isSenderCompleted && (
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
					<button>Continuar</button>
				</form>
			)}
		</div>
	);
}
