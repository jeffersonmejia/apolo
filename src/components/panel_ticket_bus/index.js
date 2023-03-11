import styles from "./index.module.css";
import TicketDescription from "../ticket_description";
import { DarkModeContext } from "@/context/dark_mode";
import { useContext, useEffect, useState } from "react";
import { SigninContext } from "@/context/signin";
import BusSeat from "../bus_seat";
const STATUS_AVAILABLE = 0;
const STATUS_UNAVAILABLE = 1;
const STATUS_RESERVED = 2;

export function PanelTicketBus() {
	const { isDarkMode } = useContext(DarkModeContext);
	const { data } = useContext(SigninContext);
	const [seatReserved, setSeatReserved] = useState([]);
	const [seatAvailable, setSeatAvailable] = useState([]);
	const [seatUnavailable, setSeatUnavailable] = useState([]);
	const [totalSeats, setTotalSeats] = useState([]);
	const [status, setStatus] = useState([]);

	useEffect(() => {
		if (totalSeats.length === 0) {
			const { seats } = data;
			const { available, unavailable, reserved } = seats;

			available.map((el) => totalSeats.push(el));
			unavailable.map((el) => totalSeats.push(el));
			reserved.map((el) => totalSeats.push(el));
			setTotalSeats(totalSeats.sort((a, b) => a - b));
			setSeatAvailable(available);
			setSeatUnavailable(unavailable);
			setSeatReserved(reserved);
		}
	}, []);

	const changeStatus = (current) => setStatus(current);
	const reserve = () => changeStatus(STATUS_RESERVED);
	const handleStatus = ({ currentTarget }) => {
		const { className } = currentTarget;
		console.log(className);
		if (STATUS_RESERVED) {
		}
	};
	const theme = !isDarkMode ? styles.light : styles.dark;

	const getStatus = (everySeat) => {
		let unavailable = seatUnavailable.some((seat) => seat === everySeat);
		let reserved = seatReserved.some((seat) => seat === everySeat);
		if (unavailable) return 1;
		if (reserved) return 2;
	};
	return (
		<div className={`${styles.bus} ${theme}`}>
			<div>
				<TicketDescription status={STATUS_UNAVAILABLE} />
				<TicketDescription status={STATUS_RESERVED} />
			</div>
			<div className={styles.seats}>
				{totalSeats.length > 0 &&
					totalSeats.map((el) => <BusSeat el={el} state={getStatus(el)} key={el} />)}
			</div>
			<small onClick={reserve}>Reservar asiento</small>
		</div>
	);
}
