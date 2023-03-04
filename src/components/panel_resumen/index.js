import styles from "./index.module.css";
import { Modal } from "../modal";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { PanelSectionContext } from "@/context/panel_section";
import { SigninContext } from "@/context/signin";

import { PanelResumeData } from "../panel_resume_data";
import { GroupBtn } from "../group_btn";
export function PanelResumen() {
	const [travel, dispatch] = useReducer((state = [], action) => {
		switch (action.type) {
			case "show_modal": {
				return [...state, { modal: true }];
			}
			case "hidde_modal": {
				return [...state, { modal: false }];
			}
			default: {
				return state;
			}
		}
	});
	const operations = useRef(null);
	const handleClick = ({ currentTarget }) => {
		console.log(currentTarget === operations);
	};

	const [isModalOpen, setModal] = useState(false);

	const [sellContent, setSell] = useState("");
	const [cancelContent, setCancel] = useState("");
	const [sectionContent, setSection] = useState("");

	const [busNumber, setBusNumber] = useState("--");
	const [itinerary, setItinerary] = useState("--");
	const [departure, setDeparture] = useState("--");

	const { data } = useContext(SigninContext);
	const { isTicketActive } = useContext(PanelSectionContext);

	const getTravelInfo = () => {
		if (data) {
			setBusNumber(data[0].bus);
			setItinerary(data[0].itinerary);
			setDeparture(data[0].departure);
		}
	};
	useEffect(() => {
		getTravelInfo();
	}, [data]);

	const handleModal = () => {
		setModal(true);
	};

	const cancelChangeTravel = () => {
		setModal(false);
	};

	const changeTravel = () => {
		setModal(false);
	};

	useEffect(() => {
		if (isTicketActive) {
			setSection("Boletos");
			setSell("Vendidos");
			setCancel("Anulados");
		} else {
			setSection("Encomiendas");
			setSell("Vendidas");
			setCancel("Anuladas");
		}
	}, [isTicketActive]);

	return (
		<div className={styles.resume}>
			<table className={styles.resumenTable}>
				<PanelResumeData
					caption="Información del viaje"
					title_1="Número de bus"
					content_1={busNumber}
					title_2="Viaje actual"
					content_2={itinerary}
					title_3="Salida"
					content_3={departure}
				/>
			</table>
			<table className={styles.resumenTable}>
				<PanelResumeData
					caption={sectionContent}
					title_1={sellContent}
					content_1="23"
					title_2={cancelContent}
					content_2="12"
					title_3="Disponibles"
					content_3="21"
				/>
			</table>
			<table className={styles.resumenTable}>
				<PanelResumeData
					caption="Ventas"
					title_1="Recaudado"
					content_1="$20.00"
					title_2="Ahorrado"
					content_2="--"
					title_3="Total"
					content_3="$20.00"
				/>
			</table>
			<GroupBtn>
				<button>Cerrar viaje</button>
				<small onClick={handleClick}>Cambiar viaje</small>
			</GroupBtn>
			{isModalOpen && (
				<Modal>
					<form className={styles.listTravel}>
						<fieldset>
							<legend>Listado de viajes creados</legend>
							<select>
								<option>Selecciona un viaje</option>
								<option>Santo Domingo - Manta</option>
								<option>Quito - Manta</option>
								<option>Santo Domingo - Coca</option>
							</select>
							<select>
								<option>Selecciona un bus</option>
								<option>1</option>
								<option>78</option>
								<option>64</option>
								<option>32</option>
							</select>
						</fieldset>
						<div className={styles.groupBtn} ref={operations} onClick={handleClick}>
							<button>Cambiar viaje actual</button>
							<small>Cancelar</small>
						</div>
					</form>
				</Modal>
			)}
		</div>
	);
}
