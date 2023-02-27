import styles from "./index.module.css";
import { PanelPackageData } from "../panel_package_form";
import { useState } from "react";

export function PanelPackage() {
	const [isSenderCompleted, setSender] = useState(false);

	return (
		<div className={`${styles.package} ${isSenderCompleted ? "packageGrid" : ""}`}>
			<form>
				<PanelPackageData person="Remitente" />
				<button>Continuar</button>
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
