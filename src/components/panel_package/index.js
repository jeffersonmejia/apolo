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
				<PanelPackageData person="Remitente" />
				<button onClick={handleSender}>Continuar</button>
			</form>
			{isSenderCompleted && (
				<form>
					<PanelPackageData person="Destinatario" />
					<button>Continuar</button>
				</form>
			)}
		</div>
	);
}
