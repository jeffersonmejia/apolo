import styles from "./index.module.css";
import TicketDescription from "../ticket_description";
import { DarkModeContext } from "@/context/dark_mode";
import { useContext, useEffect, useState } from "react";
import { SigninContext } from "@/context/signin";
import BusSeat from "../bus_seat";
import { ChangeSeat } from "../change_seat";

const STATUS = {
	AVAILABLE: {
		code: 0,
		name: "Disponible",
		class: "available",
	},
	UNAVAILABLE: {
		code: 1,
		name: "Ocupado",
		class: "unavailable",
	},
	RESERVED: {
		code: 2,
		name: "Reservado",
		class: "reserved",
	},
};
const { AVAILABLE, UNAVAILABLE, RESERVED } = STATUS;

export function PanelTicketBus() {
	const { isDarkMode } = useContext(DarkModeContext);
	const { data } = useContext(SigninContext);
	const [resetSeat, setResetSeat] = useState(-1);
	const [changeClient, setChangeClient] = useState("--");
	const [changeSeat, setChangeSeat] = useState(-1);
	const [isModal, setModal] = useState(false);
	const [totalSeats, setTotalSeats] = useState([]);
	const theme = !isDarkMode ? styles.light : styles.dark;

	const getSeats = () => {
		if (totalSeats.length === 0) {
			const { seats } = data;
			const { available, unavailable, reserved } = seats;
			const total_seats = available.concat(unavailable, reserved);
			const total_seats_sorted = total_seats.sort((a, b) => a - b);
			setTotalSeats(total_seats_sorted);
		}
	};

	const getStatus = (seat) => {
		const { seats } = data;
		const { available, unavailable, reserved } = seats;
		if (available.some((search) => search === seat)) return AVAILABLE.code;
		if (unavailable.some((search) => search === seat)) return UNAVAILABLE.code;
		if (reserved.some((search) => search === seat)) return RESERVED.code;
	};
	useEffect(() => getSeats(), []);
	return (
		<div className={`${styles.bus} ${theme}`}>
			<TicketDescription status={STATUS} />
			<div className={styles.seats}>
				{totalSeats.length > 0 &&
					totalSeats.map((el) => (
						<BusSeat
							el={el}
							state={getStatus(el)}
							key={el}
							setModal={setModal}
							setChangeSeat={setResetSeat}
							changeSeat={resetSeat}
							seatToChange={changeSeat}
						/>
					))}
			</div>
			{isModal && (
				<ChangeSeat
					setModal={setModal}
					seat={resetSeat}
					client={changeClient}
					setChangeSeat={setResetSeat}
					setSeatToChange={setChangeSeat}
					totalSeats={totalSeats.length}
				/>
			)}
		</div>
	);
}
