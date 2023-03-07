import styles from "./index.module.css";
import { useContext, useState } from "react";
import { PanelSectionContext } from "@/context/panel_section";
import { SigninContext } from "@/context/signin";
import { PanelResumeData } from "../panel_resume_data";
import { GroupBtn } from "../group_btn";
import { ChangeTravel } from "../change_travel";
import { Loader } from "../loader";

export function PanelResumen() {
	const { data } = useContext(SigninContext);
	const [isLoader, setLoader] = useState(false);
	const [isModalOpen, setModal] = useState(false);
	const [travelData] = useState(data);
	const { isTicketActive } = useContext(PanelSectionContext);

	const handleClick = ({ currentTarget }) => {
		if (currentTarget.matches("button")) {
			setLoader(true);
			setTimeout(() => {
				setLoader(false);
			}, 2000);
		} else {
			setModal(true);
		}
	};
	return (
		<div className={styles.resume}>
			{isLoader && <Loader message="Cerrando viaje..." />}
			{travelData && (
				<>
					{!isLoader && (
						<>
							<table className={styles.resumenTable}>
								<PanelResumeData
									caption="Información del viaje"
									title_1="Número de bus"
									content_1={travelData.current.bus}
									title_2="Viaje actual"
									content_2={travelData.current.itinerary}
									title_3="Salida"
									content_3={travelData.current.departure}
								/>
							</table>
							<table className={styles.resumenTable}>
								<PanelResumeData
									caption={isTicketActive ? "Boletería" : "Encomiendas"}
									title_1="Vendidos/as"
									content_1={travelData.current.selled}
									title_2="Anulados/as"
									content_2={travelData.current.cancelled}
									title_3="Disponibles"
									content_3="--"
								/>
							</table>
							<table className={styles.resumenTable}>
								<PanelResumeData
									caption="Ventas"
									title_1="Recaudado"
									content_1={travelData.current.collected}
									title_2="Ahorrado"
									content_2={travelData.current.saved}
									title_3="Total"
									content_3={travelData.current.total}
								/>
							</table>
							<GroupBtn
								btn_1="Cerrar viaje"
								btn_2="Cambiar viaje"
								MyClick={handleClick}
							/>
						</>
					)}
					{isModalOpen && <ChangeTravel setModal={setModal} listTravel={data} />}
				</>
			)}
		</div>
	);
}
