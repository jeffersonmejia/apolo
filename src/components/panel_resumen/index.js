import styles from "./index.module.css";
import { useContext, useEffect, useState } from "react";
import { PanelSectionContext } from "@/context/panel_section";
import { SigninContext } from "@/context/signin";
import { PanelResumeData } from "../panel_resume_data";
import { GroupBtn } from "../group_btn";
import { ChangeTravel } from "../change_travel";
import { Loader } from "../loader";
import { useHttp } from "@/hooks/useHttp";

export function PanelResumen() {
	const initialTravel = {
		bus: "--",
		itinerary: "--",
		departure: "--",
		selled: "--",
		cancelled: "--",
		reserved: "--",
		available: "--",
		collected: "--",
		saved: "--",
		total: "--",
		total_seats: "--",
	};

	const { data } = useHttp("http://localhost:3001/travelList");

	const [isLoader, setLoader] = useState(false);
	const [isModalOpen, setModal] = useState(false);
	const [travelData, setTravelData] = useState(initialTravel);
	const [listTravel, setListTravel] = useState([]);
	const { currentTravel } = useContext(SigninContext);
	const { isTicketActive } = useContext(PanelSectionContext);
	useEffect(() => {
		if (data && data.length > 0) {
			setListTravel(data);
		}
	}, [data]);

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

	useEffect(() => {
		if (currentTravel) {
			setTravelData(currentTravel[0]);
		}
	});
	return (
		<div className={styles.resume}>
			{isLoader && <Loader message="Cerrando viaje..." />}
			{!isLoader && (
				<>
					<table className={styles.resumenTable}>
						<PanelResumeData
							caption="Información del viaje"
							title_1="Número de bus"
							content_1={travelData.bus}
							title_2="Viaje actual"
							content_2={travelData.itinerary}
							title_3="Salida"
							content_3={travelData.departure}
						/>
					</table>
					<table className={styles.resumenTable}>
						<PanelResumeData
							caption={isTicketActive ? "Boletería" : "Encomiendas"}
							title_1="Vendidos/as"
							content_1={travelData.selled}
							title_2="Anulados/as"
							content_2={travelData.cancelled}
							title_3="Disponibles"
							content_3={isTicketActive ? currentTravel.available : "--"}
						/>
					</table>
					<table className={styles.resumenTable}>
						<PanelResumeData
							caption="Ventas"
							title_1="Recaudado"
							content_1={travelData.collected}
							title_2="Ahorrado"
							content_2={travelData.saved}
							title_3="Total"
							content_3={travelData.total}
						/>
					</table>
					<GroupBtn btn_1="Cerrar viaje" btn_2="Cambiar viaje" MyClick={handleClick} />
				</>
			)}
			{isModalOpen && <ChangeTravel setModal={setModal} listTravel={listTravel} />}
		</div>
	);
}
