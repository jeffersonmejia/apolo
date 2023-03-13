import styles from "./index.module.css";
import { useContext, useState } from "react";
import { PanelSectionContext } from "@/context/panel_section";
import { SigninContext } from "@/context/signin";
import { PanelResumeData } from "../panel_resume_data";
import { GroupBtn } from "../group_btn";
import { ChangeTravel } from "../change_travel";
import { Loader } from "../loader";
import { DarkModeContext } from "@/context/dark_mode";
import { LoaderButton } from "../loaderButton";
export function PanelResumen() {
	const { data } = useContext(SigninContext);
	const { isTicketActive } = useContext(PanelSectionContext);
	const { isDarkMode } = useContext(DarkModeContext);
	const [isLoader, setLoader] = useState(false);
	const [isModalOpen, setModal] = useState(false);
	const [travelData] = useState(data);

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
		<div className={`${styles.resume} ${!isDarkMode ? styles.light : styles.dark}`}>
			{travelData && (
				<>
					<h3>{travelData.current.itinerary}</h3>
					<div className={styles.bus_detail}>
						<small>
							<span class="material-symbols-outlined">directions_bus</span>
							<p>
								{travelData.current.driver}({travelData.current.bus})
							</p>
						</small>
						<small>
							<span class="material-symbols-outlined">departure_board</span>
							<p>{travelData.current.departure}</p>
						</small>
					</div>
					<div className={styles.detail}>
						<h5>
							<span class="material-symbols-outlined">receipt_long</span>
							<p>Boletos</p>
						</h5>
						<div>
							<h5> Vendidos</h5>
							<small>{travelData.current.selled}</small>
						</div>
						<div>
							<h5>Reservados</h5>
							<small>{travelData.current.reserved}</small>
						</div>
						<div>
							<h5>Anulados</h5>
							<small>{travelData.current.cancelled}</small>
						</div>
						<h5>
							<span class="material-symbols-outlined">payments</span>
							<p>Ventas</p>
						</h5>
						<div>
							<h5>Ingresos</h5>
							<small>${travelData.current.collected}</small>
						</div>
						<div>
							<h5>Ahorros</h5>
							<small>${travelData.current.saved}</small>
						</div>
						<div>
							<h5>Recaudado</h5>
							<small>${travelData.current.total}</small>
						</div>
					</div>
					<div className={styles.group_btn}>
						<LoaderButton
							MyClick={handleClick}
							isLoading={isLoader}
							defaultBtn="Cerrar viaje"
							loading="Cerrando..."
						/>
						<small onClick={handleClick}>Gestionar viajes</small>
					</div>
				</>
			)}
			{isModalOpen && <ChangeTravel setModal={setModal} listTravel={data} />}
		</div>
	);
}
