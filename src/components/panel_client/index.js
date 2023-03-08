import styles from "./index.module.css";
import { DarkModeContext } from "@/context/dark_mode";
import { PanelClientData } from "../panel_client_data";
import { PanelClientTravel } from "../panel_client_travel";
import { useContext, useState } from "react";
import { PanelClientVoucher } from "../panel_client_voucher";
import { GroupBtn } from "../group_btn";

export function PanelClient() {
	const [isLastForm, setLastForm] = useState(false);
	const [isModalActive, setModal] = useState(false);
	const { isDarkMode } = useContext(DarkModeContext);

	const handleClick = (e) => {
		if (e.currentTarget.matches("button")) {
			if (!isLastForm) setLastForm(true);
			else setModal(true);
		} else {
			setLastForm(!isLastForm ? true : false);
		}
	};
	return (
		<>
			<form className={`${styles.client} ${!isDarkMode ? styles.light : styles.dark}`}>
				<legend>{!isLastForm ? "Datos del cliente" : "Datos del viaje"}</legend>
				<fieldset>{!isLastForm ? <PanelClientData /> : <PanelClientTravel />}</fieldset>
				<GroupBtn
					btn_1={!isLastForm ? "Siguiente" : "Imprimir"}
					btn_2={isLastForm && "Agregar más"}
					MyClick={handleClick}
				/>
			</form>
			{isModalActive && <PanelClientVoucher setModal={setModal} />}
		</>
	);
}
